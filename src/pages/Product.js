import { useState } from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../componentes/Announcement";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Newsletter from "../componentes/Newsletter";

const Container  = styled.div`

`
const Wrapper = styled.div`
    padding : 50px;
    display : flex;

`
const ImageContainer = styled.div`
    flex : 1;
`
const Image  = styled.img`
    width : 100%;
    height : 90vh;
    object-fit : cover;
`
const InfoContainer = styled.div`
    flex : 1;
    padding : 0px 50px;
`
const Title = styled.h1`
    font-weight : 200;
`
const Desc = styled.p`
    margin : 20px 0px;

`
const Price = styled.span`
    font-weight : 100;
    font-size : 40px;
`

const FilterContainer = styled.div`
    width : 50%;
    margin : 30px 0px;
    display : flex;
    justify-content : space-between;

`
const Filter = styled.div`
    display : flex;
    align-items : center;

`
const FilterTitle = styled.span`
    font-size : 20px;
    font-weight : 200;
`
const FilterColor = styled.div`
    width : 20px;
    height : 20px;
    border-radius : 50%;
    background-color : ${props => props.color};
    margin : 0px 5px;
    cursor : pointer;

`
const FilterSize = styled.select`
    margin-left : 10px;
    padding : 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width : 50%;
    display : flex;
    align-items : center;
    justify-content : space-between;

`
const AmountContainer = styled.div`
    display : flex;
    align-items : center;
    font-width : 770; 
`
const Amount = styled.span`
    width : 30px;
    height : 30px;
    border-radius : 10px;
    border : 1px solid teal;
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0px 5px;

`

const Button = styled.button`
    padding : 20px;
    border : 2px solid teal;
    background-color : white;
    cursor : pointer;

    &:hover{
        background-color : #f8f4f4;
    }
`

const Product = () => {
    const [number, setNumber] = useState(1)
  return (
    <Container>
        
        <Announcement/>
        <NavBar/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImageContainer>

            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aliquid enim animi culpa ipsa eaque eius quidem. Ipsum ducimus a repellendus optio architecto rem animi ratione mollitia magni nisi temporibus r<FilterSizeOption>S</FilterSizeOption>ecusandae numquam, ad vel earum maiores quae, praesentium voluptas. Quos, obcaecati mollitia!</Desc>
                <Price>$ 20</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="grey"/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                            <FilterSizeOption>XXXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>{
                            setNumber(number-1)
                        }}/>
                        <Amount>{number}</Amount>
                        <Add onClick={()=>{
                            setNumber(number+1)
                        }}/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

                

            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default Product
