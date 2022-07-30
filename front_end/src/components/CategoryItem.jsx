import styled from "styled-components"
import { mobile } from "../responsive"
const Container=styled.div`
  flex:1;
  margin: 3px; 
  position: relative;
`

const Image=styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: "30vh"})}
`

const Information=styled.div`
  position: absolute;
  width:100%;
  height: 100%;
  top:0;
  left:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title=styled.h1`
  color: white;
  margin: 10px;
  font-weight: 600;
`

const Button=styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Information>
        <Title>{item.title}</Title>
        <Button>START NOW</Button>  
      </Information>      
    </Container>
  )
}

export default CategoryItem