import React from 'react'
import styled from 'styled-components'
import MenuBarUser from '../Components/MenuBar/MenuBarUser'
import image from '../Assets/Images/about-us.png'

const Wrapper = styled.div`
    overflow-y : scroll;
`
const Container = styled.div`
    margin : 50px 400px;
    height : 100vh;
`
const Title = styled.div`
    text-align : center;
    font-size : 45px;
    font-weight : 200;
    color : #0b1a4d9c;
`
const Content = styled.div`
    font-weight : 300;
    font-size : 20px;
    color : #070f2d9f;
`
const Picture = styled.div`
    width : fit-content;
    margin : auto;
    margin-bottom : 200px;
`
function AboutUsPage() {
  return (
    <>
    <MenuBarUser/>
    <Wrapper>
        <Container>
            <Title>
                ABOUT US
            </Title>
            <Content>
                <p>
                Welcome to Charge Radar, a pioneering force in electric vehicle (EV) charging technology. Our intelligent network connects charging piles, stations, and EVs to provide a seamless and user-friendly experience. Our platform helps EV owners locate and utilize charging stations with ease, offering real-time availability, reservation capabilities, and secure payment processing. Accessible via mobile and web, Charge Radar integrates with navigation systems for efficient trip planning. By fostering collaboration among service providers, we ensure compatibility and interconnectivity across different charging brands, enhancing convenience for users. Committed to sustainability and innovation, Charge Radar is dedicated to making EV charging more accessible, reliable, and efficient, driving the adoption of electric mobility and contributing to a greener future. Join us in revolutionizing the EV charging experience.
                </p>
                <Picture>
                    <img src={image} alt="" height={400}/>
                </Picture>
            </Content>
        </Container>
    </Wrapper>
    </>
  )
}

export default AboutUsPage