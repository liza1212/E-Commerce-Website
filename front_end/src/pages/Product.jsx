
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"
import { useEffect, useState } from "react"
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
`

const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer=styled.div`
    display:flex;
    margin: 30px 0px;
    width: 50%;
    justify-content: space-between;
     ${mobile({width: "100%"})}
`

const Filter=styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize=styled.select`
    margin-left: 10px;
    padding: 5px;
`

const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
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
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(addProduct({ ...product,quantity,color,size}));
    };
    return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://static.vecteezy.com/system/resources/previews/001/191/986/non_2x/circle-logo-png.png"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>LOGO DESIGNS</Title>
                <Desc>Why is a logo important? Because it grabs attention, makes a strong first impression, is the foundation of your brand identity, is memorable, separates you from competition, fosters brand loyalty, and is expected by your audience. 
                    With aurora building a logo is just one step away.
                </Desc>
                <Price>Rs. 3000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Quantity</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="blue"/>
                        <FilterColor color="red"/>
                        <FilterTitle>Type</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>png</FilterSizeOption>
                                <FilterSizeOption>jpeg</FilterSizeOption>
                                <FilterSizeOption>somthing</FilterSizeOption>
                            </FilterSize>
                    </Filter>
                </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product