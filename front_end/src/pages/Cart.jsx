
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Container = styled.div``;

const Wrapper=styled.div`
    padding: 20px;
    ${mobile({padding: "10px%"})}
`
const Title=styled.h1`
    font-weight: 200;
    text-align: center;

`
const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>props.type==="filled"? "#04063c":"transparent"};
    color: ${props=>props.type==="filled" && "white"};
    transition: all 0.5s ease;
    &:hover{
        transform:scale(1.2);
    }
`

const TopTexts=styled.div`
    ${mobile({display: "none"})}
`

const TopText=styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`

const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}

`
const Info=styled.div`
    flex:3;
`

const Product=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const ProductInfo=styled.div`
    flex:2;
    display: flex;
`;

const ProductImg=styled.img`
    width: 200px;
`;

const Details=styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-around;
`;

const ProductName=styled.span`
    font-size: 25px;
`;

const ProductId=styled.span``;

const PriceDetail=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const Image = styled.img`
  width: 200px;
`;


const Hr= styled.hr`
    background-color: #eee;
    border: none;
    height: 3px;
`

const ProductCompany=styled.div`
    font-size: 20px;
  font-weight: 100;
`

const ProductDesc=styled.div`
    font-size: 15px;
    font-weight: 200;
`

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>
                Your services
            </Title>
            <Top>
                <TopButton><Link to={`/products/SERVICES`} style={{ textDecoration: "none"}} >Add more services</Link></TopButton>
                <TopTexts>
                    <TopText>Shopping Bag</TopText>
                    <TopText>Wishlist</TopText>
                </TopTexts>
                
                <TopButton type="filled">SUBMIT</TopButton>
            </Top>
            <Bottom>
                <Info>
                {cart.products.map((product) => (
                <Product>
                    <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                        <ProductName>
                        <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductCompany>
                            <b>Company Name:</b>{product.company}
                        </ProductCompany>
                        <ProductDesc>
                            <b>Description:</b>{product.desc}
                        </ProductDesc>
                        <ProductId>
                        <b>ID:</b> {product._id}
                        </ProductId>
                    </Details>
                    </ProductDetail>
                    <PriceDetail>
                    <ProductAmountContainer>
                        <Add />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove />
                    </ProductAmountContainer>

                    </PriceDetail>
                </Product>
                ))}
                    <Hr/>
                </Info>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart