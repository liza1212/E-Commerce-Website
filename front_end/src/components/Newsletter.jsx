import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    height: 60vh;
    background-color: #04063c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title=styled.h1`
    margin-bottom: 30px;
    font-size: 70px;
    color: white;
    ${mobile({fontSize: "50px"})}
`

const Description=styled.div`
    font-size: 24;
    font-weight: 300;
    letter-spacing: 3px;
    margin-bottom: 20px;
    color: white;
    ${mobile({textAlign: "center", fontSize:"18"})}
`

const InputContainer=styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`

const Input=styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button=styled.button`
    cursor:pointer;
    flex: 1;
    border: none;
    background-color: #ede9e8;
    color: white;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Stay updated about our services and offers.</Description>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter