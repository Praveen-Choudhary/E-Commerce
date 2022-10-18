import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
// import { ListItem } from "material-ui";
import styled from "styled-components";

const Container = styled.div`
    display : flex;
`
const Left = styled.div`
    flex:1;
    dispaly : flex;
    flex-direction : column;
    padding : 20px;

`
const Logo = styled.h1``


const Desc = styled.p`
    margin  : 20px 0px;
`
const SocialContainer = styled.div`
    display : flex;
`
const SocialIcon = styled.div`
    width :40px;
    height : 40px;
    border-radius : 50%;
    background-color : #${props => props.color};
    color : white;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;

`

const Center = styled.div`
    flex :1;
    padding :20px;
`
const Title = styled.h3`
    margin-bottom : 30px;
`
const List = styled.ul`
    margin : 0;
    padding : 0;
    list-style : none;
    display : flex;
    flex-wrap : wrap;
`
const ListItems = styled.li`
    width : 50%;
    margin-bottom : 10px;
`

const Right = styled.div`
    flex : 1;
    padding : 20px;
`
const ContactInfo = styled.div`
    margin-bottom :28px;
    display : flex;
    align-items :  center;

`

const Payment =styled.img`
    width : 100%
`

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>LAMA.</Logo>
              <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, rem, beatae voluptate labore pariatur et ut, quas id ullam adipisci nemo. Ipsa asperiores sapiente dolore magnam quisquam sed quae consectetur voluptas, impedit fugiat? Unde dignissimos labore quibusdam quis sit velit, neque delectus commodi autem?</Desc>
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
          <Center>

              <Title>UseFul Links</Title>

              <List>
                  <ListItems>Home</ListItems>
                  <ListItems>Cart</ListItems>
                  <ListItems>Man Fashion</ListItems>
                  <ListItems>Woman Fashion</ListItems>
                  <ListItems>Accessories</ListItems>
                  <ListItems>My Account</ListItems>
                  <ListItems>Order Tracking</ListItems>
                  <ListItems>Wishlist</ListItems>
                  <ListItems>Favroite</ListItems>
                  <ListItems>Terms</ListItems>
              </List>

          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactInfo> <Room style={{marginRight:'10px'}}/> B-68, BOYS HOSTEL, BKBIET(PILANI), 333031</ContactInfo>
              <ContactInfo> <Phone style={{marginRight : '10px'}}/> +91 6377163096</ContactInfo>
              <ContactInfo> <Email style={{marginRight : '10px'}}/> praveenchoudhary348@gmail.com</ContactInfo>
              <Payment src = 'https://i.ibb.co/Qfvn4z6/payment.png'/>
          </Right>
      </Container>
  )
}

export default Footer