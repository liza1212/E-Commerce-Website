
import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container=styled.div`
    

`

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

const ProductName=styled.span``;

const ProductID=styled.span``;

const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`;

const ProductType=styled.span``;

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

const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`;

const Hr= styled.hr`
    background-color: #eee;
    border: none;
    height: 3px;
`

const Summary=styled.div`
    flex:1;
    background-color: #04063c;
    color: white;
    padding: 20px;
    border: 0.5px solid lightblue;
    border-radius: 10px;
    height: 50vh;
`

const SummaryTitle=styled.h1`
    font-weight: 200;
`

const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`


const SummaryItemText=styled.div``

const SummaryButton=styled.button`
    width:100%;
    padding: 10px;
    background-color: white;
    color: #04063c;
    font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Title>
                Your services
            </Title>
            <Top>
                <TopButton>Add more services</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag</TopText>
                    <TopText>Wishlist</TopText>
                </TopTexts>
                
                <TopButton type="filled">Check-out now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductInfo>
                            <ProductImg src="https://static.vecteezy.com/system/resources/previews/009/338/565/non_2x/natural-luxury-abstract-fluid-art-painting-in-alcohol-ink-technique-tender-and-dreamy-wallpaper-mixture-of-colors-creating-transparent-waves-and-golden-swirls-for-posters-other-printed-materials-free-png.png"/>
                            <Details>
                                <ProductName><b>Product:</b>SOMETHING</ProductName>
                                <ProductID><b>ID:</b>1234</ProductID>
                                <ProductColor color="black"/>
                                <ProductType><b>Type:</b>PNG</ProductType>
                            </Details>
                        </ProductInfo>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs. 3000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductInfo>
                            <ProductImg src="https://static.vecteezy.com/system/resources/previews/009/338/565/non_2x/natural-luxury-abstract-fluid-art-painting-in-alcohol-ink-technique-tender-and-dreamy-wallpaper-mixture-of-colors-creating-transparent-waves-and-golden-swirls-for-posters-other-printed-materials-free-png.png"/>
                            <Details>
                                <ProductName><b>Product:</b>SOMETHING</ProductName>
                                <ProductID><b>ID:</b>1234</ProductID>
                                <ProductColor color="black"/>
                                <ProductType><b>Type:</b>PNG</ProductType>
                            </Details>
                        </ProductInfo>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>Rs. 3000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem >
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>Rs. 3000</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping:</SummaryItemText>
                            <SummaryItemText>Rs. 3000</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemText>Rs. -3000</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem  type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemText>Rs. 3000</SummaryItemText>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart