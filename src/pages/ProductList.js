import styled from "styled-components"
import Announcement from "../componentes/Announcement"
import Footer from "../componentes/Footer"
import NavBar from "../componentes/NavBar"
import Newsletter from "../componentes/Newsletter"
import Products from "../componentes/Products"

const Container = styled.div`

`
const Title = styled.h1`
    margin : 20px;
`
const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between;
`
const Filter = styled.div`
    margin ; 20px;

`
const FilterText = styled.span`
    font-size : 20px;
    font-weight : 600px;
    margin: 20px;
`

const Select = styled.select`
    padding :10px;
    margin : 20px;
`
const Option  = styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <NavBar/>

        <Title>Dresses</Title>

        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>


                </Select>
            
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>S</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>

            <Filter>

                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (low yo high)</Option>
                    <Option>Price (high to low)</Option>
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
