import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "./icons/CartIcon";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import React from 'react'

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart(){
        addProduct(product._id)
    }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                    <div>
                    <Title> {product.title} </Title>
                        <Desc> {product.description}  </Desc>
                        <ButtonsWrapper>

                        <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                            <Button white onClick={addFeaturedToCart} > 
                                <CartIcon />
                                Add to cart 
                            </Button>
                        </ButtonsWrapper>
                    </div>
                    </Column>
                    <Column>
                        <img style={{maxWidth:"60%", height:"auto"}}  src="https://rafael-next-ecommerce.s3.us-east-2.amazonaws.com/1691091289871.jpg" alt="" />
                    </Column>
                </ColumnsWrapper>
                
            </Center>
        </Bg>
    )
}