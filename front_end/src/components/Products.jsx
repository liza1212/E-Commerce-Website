import { useEffect, useState } from "react"
import styled from "styled-components"
import { popularSkincare } from "../data"
import Product from "./Product"
import axios from "axios"

const Container=styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between; 
`

const Products = ({cat, filter}) => {
    //cat stands for the sevices and filter stands for the company
    const [product, setproduct] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    useEffect(() => {
      const getProducts=async()=>{
            try{
                const res=await axios.get(cat?`http://localhost:8000/api/products?category=${cat}`
                :`http://localhost:8000/api/products`
                );
                setproduct(res.data)
            }
            catch(err){}
      };
      getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setfilteredProducts(
          product.filter(item=>
            Object.entries(filter).every(([key,value])=>
              item[key].includes(value)
            )
          )
        )
    }, [product,cat,filter])
    

  return (
    <Container>
        {filteredProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products