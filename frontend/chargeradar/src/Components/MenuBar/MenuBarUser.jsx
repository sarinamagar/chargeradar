import React from 'react'
import styled from 'styled-components'
import LogoNormal from '../Logo/LogoNormal'
import { Navigate, useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
    margin-top : -10px;
    max-height: 85px !important; 
    display: flex;
    position : sticky;
    z-index : 2;
    `

const Flex = styled.div`
    width: 100%;
    display: flex;
    height : 85px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-shadow: rgba(99, 99, 99, 0.4) 0px 1px 8px 0px;
    `

const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
`

const MenuList = styled.ul`
    display: flex;
    list-style: none;
`

const MenuItem = styled.li`
    padding: 0 15px;
    font-size: 16px;
    color: #0b1a4dba;
    width : 85px;
    text-align : center;
    font-weight: 300;
    position: relative; 
    cursor : pointer;
    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -10px; 
        left: 0;
        width: 0;
        height: 2px;
        background: #122771;
        transition: width 0.3s;
    }
    &:hover{
        color : #122771;
    }
    &:hover:after {
        width: 100%;
    }
`

const Account = styled.p`
    padding: 0 20px;
    font-size: 18px;
    color: #0b1a4dba;
    font-weight: 300;
    position : relative;
    cursor: pointer;
    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -10px; 
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 3px;
        background: #122771;
        transition: width 0.3s;
    }
    &:hover:after {
        width: 100%;
    }
`

function MenuBarUser() {
    const navigate = useNavigate()
  return (
    <Wrapper>
        <Flex>
            <LogoNormal />
            <MenuContainer>
                <MenuList>
                    <MenuItem onClick={()=>{navigate("/")}}><a>map</a></MenuItem>
                    <MenuItem onClick={()=>{navigate("/help")}}>f.a.q</MenuItem>
                    <MenuItem onClick={()=>{navigate("/about")}}>about us</MenuItem>
                    <MenuItem>contact us</MenuItem>
                    <MenuItem onClick={()=>{navigate("/add")}}>contribute</MenuItem>
                </MenuList>
            </MenuContainer>
            <Account onClick={()=>navigate('/login')}>
                account
            </Account>
        </Flex>
    </Wrapper>
  )
}

export default MenuBarUser
