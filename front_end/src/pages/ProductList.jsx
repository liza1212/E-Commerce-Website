import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"
const Container= styled.div``

const Title=styled.h1`
  margin: 20px;

`

const FilterContainer= styled.div`
  display:flex;
  justify-content: space-between;
`

const Filter= styled.div`
  margin: 20px;
  ${mobile({width: "0px 20px", display: "flex", flexDirection:"column"})}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: "0px"})}
`

const Select= styled.select`
  padding: 20px;
  margin: 2px;;
  ${mobile({margin: "10px 0px"})}
`

const Option=styled.option``

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>SERVICES</Title>
        <FilterContainer>
          <Filter><FilterText>Select Service</FilterText>
            <Select>
              <Option disabled selected>
                Mobile Services
              </Option>
              <Option>Application</Option>
              <Option>Designs</Option>
              <Option>Digital Marketing</Option>
              <Option>Logo</Option>
              <Option>Website Services</Option>
              <Option>Engine Optimization</Option>
            </Select>
          </Filter>
          <Filter><FilterText>Select type</FilterText>
            <Select>
              <Option>Local Business</Option>
              <Option>Restaurant</Option>
              <Option>Store Management</Option>
              <Option>Appointments</Option>
              <Option>E-commerce</Option>
              <Option>Sell Products</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
} 

export default ProductList