import styled from "styled-components"
import Announcement from "../componentes/Announcement"
import Footer from "../componentes/Footer"
import NavBar from "../componentes/NavBar"
import Newsletter from "../componentes/Newsletter"

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    background : linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) 
    center;
    background-size : cover;
    display : flex;
    align-items : center;
    justify-content : center;
`
const Wrapper = styled.div`
    width : 40%;
    padding : 20px;
    background-color : white;
`
const Title = styled.h1`
        font-size :24px;
        font-weight :300;
`
const Form = styled.form`
    display : flex;
    flex-wrap : wrap;
`
const Input = styled.input`
    margin : 25px 10px 0 0;
    padding : 10px;
    flex : 1;
    min-width : 40%;
`
const Agreement = styled.span`
    margin : 20px 0px;
    font-size : 12px;

`

const Button = styled.button`
    width : 40%;
    border : none;
    padding : 15px 20px;
    background-color : teal;
    color : white;
    cursor : pointer;
`

const Register = () => {
  return (
    <Container>
        {/* <Announcement/> */}
        {/* <NavBar/> */}
        <Wrapper>
            <Title>CREATE AN ACCOUUNT</Title>
            <Form>
                <Input placeholder = "First Name"/>
                <Input placeholder = "Last Name"/>
                <Input placeholder = "User Name"/>
                <Input placeholder = "E mail"/>
                <Input placeholder = "Password"/>
                <Input placeholder="Confirm Password"/>
            
                <Agreement>By creating an account, I concent to the processing of my personal data in accordence with the <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
        {/* <Newsletter/> */}
        {/* <Footer/> */}
    </Container>
  )
}

export default Register
