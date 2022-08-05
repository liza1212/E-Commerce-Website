import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from "../responsive"

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection: "column"})}
`

const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;


const Logo=styled.h1`

`;

const Description=styled.p`
    margin: 20px 0px;
`;

const SocialContainer=styled.div`
    display: flex;
`;

const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    color: white;
    display: flex;
    background-color: #${props=>props.color   };
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Middle=styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    padding-bottom: 30px;
`

const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right=styled.div`
    flex:1;
    padding: 20px;
    ${mobile({color: "white", backgroundColor: "#04063c"})}
`;

const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment=styled.img`
    width: 9%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LATERAL_IT</Logo>
            <Description>
                 We provide all kinds of services like: website design, website development, logo designing, flash banner designing, e-com and dynamic websites, advertising websites, E-Brochures and email flyer designing, search engine optimization, search engine marketing and email solutions.

            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Middle>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Flyer Designing</ListItem>
                <ListItem>Website Design</ListItem>
                <ListItem>Logo Design</ListItem>
                <ListItem>E-brochures</ListItem>
                <ListItem>Previous Clients</ListItem>
                <ListItem>Engine optimization</ListItem>
                <ListItem>Feedback</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Contact Us</ListItem>
            </List>
        </Middle>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Kathmandu, Nepal </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>Contact Number</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/> Company email</ContactItem>
            <Payment src="https://esewa.com.np/common/images/esewa-icon-large.png"/>
        </Right>
    </Container>
  )
}

export default Footer