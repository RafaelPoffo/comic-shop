import Featured from "@/components/Featured"
import Header from "@/components/Header"
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product"

export default function HomePage({featuredProduct, newProducts}) {
  
  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts products={newProducts} />
    </div>
  )
} 

export async function getServerSideProps() {
  const FeaturedProductId = '64d3db3a18ef1d3612849037';
  await mongooseConnect();
  const featuredProduct = await Product.findById(FeaturedProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts))
    }
  }
}