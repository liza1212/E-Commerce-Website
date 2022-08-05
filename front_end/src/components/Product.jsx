import { Add, FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Info=styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`

const Container=styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D4d4d4;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle=styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image=styled.img`
  height: 75%;
  z-index: 2;
`

const Title=styled.h1`
  color: white;
`

const Icon=styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 12px;
  cursor: pointer;
  transition: all 0.5s ease;
   &:hover{
    background-color: #bce6ff;
    transform:scale(1.2);
  }
`;


const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Title>
          {item.desc}
        </Title>
        <Icon>
          <Add />
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product