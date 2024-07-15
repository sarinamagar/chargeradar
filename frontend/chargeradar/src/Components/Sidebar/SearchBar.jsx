import React, { useState } from 'react'
import styled from 'styled-components'
import BorderlessInput from '../Input/BorderlessInput'
import SearchFilterButton from '../Button/SearchFilterButton'
import SearchIcon from '../../Assets/Images/Icons/search-icon.png'
import { useDispatch } from 'react-redux'
import { search } from '../../State/Action/SearchAction'
import Search from '../../State/Reducer/SearchReducer'

const Wrapper = styled.div`
    `
const Container = styled.div`
    z-index : 1;
    margin : 10px;
    position : absolute;
    background-color : #ffffff;
    display : flex;
    align-items : center;
    width : fit-content;
    height : 40px;
    border-radius : 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    input{
        width : 340px !important;
        font-size : 14px;
        width : fit-content;
    }
    input:focus {
        outline : none;
    }
`
const Icon = styled.div`
    height : 60px;
    width : 60px;
    position : relative;
    svg{
        width : 25px;
        height : 25px;
        position : absolute;
        top : 18px;
        left : 16px;
    }
`

function SearchBar(props) {
    const dispatch = useDispatch(state => state.Search)
    const [searchTerm, setSearchTerm] = useState()
    
    return (
        <Container>
            <Icon>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" fill='#787272'><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
            </Icon>
            <BorderlessInput placeholder={"SEARCH FOR AN ADDRESS OR LOCATION"} onChange ={setSearchTerm} onKeyDown={()=>{}}/>
            <SearchFilterButton onClick = {props.onClick} status = {props.status}/>
        </Container>
  )
}

export default SearchBar