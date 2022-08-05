import styled from "styled-components"
import Announcements from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { mobile } from "../responsive"
import { useLocation } from 'react-router-dom';
import {useState } from 'react';

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
  const location=useLocation();
  // console.log(location);
  const cat=(location.pathname.split("/")[2]);
  console.log(cat); //not service?
  //cat is for services
  //filter is for the company name
  const [filter, setfilter] = useState({});

  const handleFilters=(evnt)=>{
    const val= evnt.target.value;
    setfilter({
        ...filter,
        [evnt.target.name]: val
    })
  }

  console.log(filter);
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>SERVICES</Title>
        <FilterContainer>
          <Filter><FilterText>Select Service</FilterText>
            <Select name="service" onChange={handleFilters}>
              <Option disabled selected>
                Mobile Services
              </Option>
              <Option>Application</Option>
              <Option>Designs</Option>
              <Option>Digital Marketing</Option>
              <Option>Logo</Option>
              <Option>Website Services</Option>
              <Option>Website</Option>
              <Option>Development</Option>
              <Option>Network Security</Option>
            </Select>
          </Filter>
          <Filter><FilterText>Select Company</FilterText>
            <Select name="company" onChange={handleFilters}>
              <Option disabled selected>
                Market Company
              </Option>
              <Option>Aurora</Option>
              <Option>Apple</Option>
              <Option>Orange</Option>
              <Option>Dark chocolate</Option>
              <Option>Coffee</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filter={filter}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
} 

export default ProductList