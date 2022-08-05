
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"

import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"


const Container=styled.div`

`
const Wrapper=styled.div`
    padding: 50px;    
    display: flex;
    object-fit: cover;
     ${mobile({padding: "10px", flexDirection:"column"})}
`

const ImgContainer=styled.div`
    flex:1 ;
`

const Image=styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
     ${mobile({height: "40vh"})}
`

const InfoContainer=styled.div`
    flex:1;
    padding: 0px 50px;
     ${mobile({padding: "10px"})}
`

const Title=styled.h1`
    font-weight: 200;
`

const Desc=styled.p`
    margin: 20px 0px; 
    padding-bottom: 80px;
`

const AddContainer=styled.div`
    /* padding-left: 50px; */
    width:50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`

const AmountContainer=styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #04063c;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0px 5px;
`

const Button=styled.button`
    padding: 15px;
    border: 3px solid #04063c;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #04063c;
        color: white;
        transform: scale(1.3);
        transition: all 0.5s ease;
    }
`

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setproduct] = useState({});
    const [quantity, setquantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async()=>{
            try{
                const res = await publicRequest.get("/products/find"+id);
                setproduct(res.data);
            } catch {}
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) => {
        if( type==="dec"){
            quantity >= 1 && setquantity(quantity -1 );
        }else {
            setquantity(quantity +1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProduct({...product,quantity})
        );
    };

    return (

    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}
                </Desc>
                    <AddContainer>
                        <AmountContainer>
                        <Remove onClick={()=> handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=> handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product