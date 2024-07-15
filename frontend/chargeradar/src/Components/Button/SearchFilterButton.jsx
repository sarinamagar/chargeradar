import React from 'react'
import styled from 'styled-components'
import FilterIcon from '../../Assets/Images/Icons/filter-icon.png'

const Wrapper = styled.div`
    background-color : #EEF0F4;
    border-radius : 6px;
    margin : 20px;
    margin-right : 10px;
    cursor : pointer;
    &:hover{
        background-color: #eaecef;
    }
    `
const Container = styled.div`
    height : 30px;
    width : 90px;  
    display : flex;
    align-items : center !important;
    justify-content : center;
    `
const Text = styled.div` 
    text-align : center;    
    font-size : 16px;
    color : #464444;
`
const Icon = styled.div`
    svg{
        height : 15px;
        width : 15px;
        margin-top : 6px;
        margin-left : 10px;
    }
`
function SearchFilterButton(props) {
  return (
    <Wrapper>
        <Container onClick={()=>{props.onClick(!props.status)}}>
            <Text>Filters</Text>
            <Icon>
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 90.000000 90.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
                    fill="#464444" stroke="none">
                    <path d="M533 735 c-16 -11 -65 -15 -229 -17 l-209 -3 0 -25 0 -25 209 -3
                    c164 -2 213 -6 229 -17 12 -8 29 -15 39 -15 24 0 58 35 58 60 0 25 -34 60 -58
                    60 -10 0 -27 -7 -39 -15z"/>
                    <path d="M690 690 l0 -31 58 3 c53 3 57 5 57 28 0 23 -4 25 -57 28 l-58 3 0
                    -31z"/>
                    <path d="M234 496 c-12 -8 -47 -16 -80 -18 -55 -3 -59 -4 -59 -28 0 -24 4 -25
                    59 -28 33 -2 68 -10 80 -18 28 -19 52 -18 76 6 25 25 25 55 0 80 -24 24 -48
                    25 -76 6z"/>
                    <path d="M390 450 l0 -30 208 2 207 3 0 25 0 25 -207 3 -208 2 0 -30z"/>
                    <path d="M413 255 c-15 -11 -58 -15 -169 -17 l-149 -3 0 -25 0 -25 149 -3
                    c111 -2 154 -6 169 -17 12 -8 29 -15 39 -15 24 0 58 35 58 60 0 25 -34 60 -58
                    60 -10 0 -27 -7 -39 -15z"/>
                    <path d="M570 210 l0 -31 118 3 117 3 0 25 0 25 -117 3 -118 3 0 -31z"/>
                    </g>
                    </svg>

            </Icon>
        </Container>
    </Wrapper>
  )
}

export default SearchFilterButton