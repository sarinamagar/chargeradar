import React from 'react'
import styled from 'styled-components'
import ChargerType from '../Widget/ChargerType'
import FastCharger1 from '../../Assets/Images/Icons/fast-charger-icon.png'
import FastCharger2 from '../../Assets/Images/Icons/fast-charger-icon-2.png'
import FastCharger3 from '../../Assets/Images/Icons/fast-charger-icon-3.png'
import FastCharger4 from '../../Assets/Images/Icons/fast-charger-icon-4.png'

const Wrapper = styled.div`
    position : fixed;
    bottom : 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width : 100%;
    height : 70px;
    z-index : 2;
    background-color: #ffffff;
`
const Container = styled.div`
    width : 100%;
    height : 60px;
    margin-top : 10px;
    display :flex;
    align-items : center;
`

function BottomBar() {
  return (
    <Wrapper>
        <Container>
            <ChargerType icon = {FastCharger1} text = {"Fast charging station"}/>
            <ChargerType icon = {FastCharger2} text = {"Commercial fast charging "} subText = {"Check the charger's display for pricing details"}/>
            <ChargerType icon = {FastCharger3} text = {"Level 2 charging station"}/>
            <ChargerType icon = {FastCharger4} text = {"Unavailable / Coming soon"}/>
        </Container>
    </Wrapper>
  )
}

export default BottomBar