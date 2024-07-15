import React from 'react'
import styled from 'styled-components'
import logoImg from '../../Assets/Images/logo/logo.png'

const Logo = styled.div`
    display : flex;
    align-items : center;
    font-size : 18px;
    p{
        display : flex;
        color: #122771;
        b{  
            font-weight : 400;
            color : #5375EA;
        }
    }
`
function LogoNormal() {
  return (
    <Logo>
        <img src={logoImg} alt="" height="45px"/>
        <p>Charge<b>Radar</b></p>
    </Logo>
  )
}

export default LogoNormal