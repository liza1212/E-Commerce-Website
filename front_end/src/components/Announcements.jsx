import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    width: 100%;
    background-color: #04063c;
    color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    padding-top: 1px;
`

const Announcements = () => {
  return (
    <Container>Get 10% off on all our services.</Container>
  )
}

export default Announcements