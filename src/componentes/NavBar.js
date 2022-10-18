import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import {useNavigate} from 'react-router-dom'

const Container = styled.div`
  height: 80px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`


const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
  flex: 1;
   display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
`

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>
          <Left>
            <Language>EN</Language>

            <SearchContainer>
                <Input />
                <Search style={{color:"gray", fontSize:16}} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LAMA.</Logo>
          </Center>
          
          <Right>
          <MenuItem onClick={()=>{
            navigate("/register");
          }}>REGISTER</MenuItem>
            <MenuItem onClick={()=>{
            navigate("/login");
          }}>
              LOG IN
            </MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default NavBar