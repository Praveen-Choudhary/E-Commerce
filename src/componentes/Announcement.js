import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: rgb(7, 107, 165);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bolder;
    margin: -10px;
`


const Announcement = () => {
  return (
      <Container>
          Super Deal! Free Shipping on Orders Over $50
      </Container>
  )
}

export default Announcement