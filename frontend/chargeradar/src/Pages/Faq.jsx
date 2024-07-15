import React from 'react'
import styled from 'styled-components'
import MenuBarUser from '../Components/MenuBar/MenuBarUser'
import image from '../Assets/Images/about-us.png'

const Wrapper = styled.div`
`
const Container = styled.div`
    margin : 50px 80px;
    height : 100vh;
    `
const Title = styled.div`
    text-align : center;
    font-size : 45px;
    font-weight : 200;
    color : #0b1a4d9c;
    `
const Content = styled.div`
    overflow-y : scroll;
    font-weight : 300;
    font-size : 20px;
    color : #070f2d9f;
    margin-top : 50px;
    display : grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap : 40px;
    column-gap : 40px;
    overflow-y : scroll;
    padding-bottom : 150px;
    height : 60vh;
`

const Card = styled.div`
    width : 348px !important;
    height : 353px !important;
    border-radius: 12px;
    background-color : #122771;
    color: #FFFFFF;
    cursor: pointer;
    `
const Desc = styled.div`
    padding : 20px;
    padding-top: 50px;
    a{
        font-size : 22px;
        font-weight : 400;
    }
    p{
        font-size : 20px;
    }
    
`
function faq() {
  return (
    <>
    <MenuBarUser/>
    <Wrapper>
        <Container>
            <Title>
                Frequenty Asked Questions
            </Title>
            <Content>
                <Card>
                    <Desc>
                        <a>How do I find the nearest EV charging station?</a>
                        <p>You can use our search feature on the homepage or app to find the nearest EV charging station. Simply enter your location or enable GPS to automatically locate nearby stations.</p>
                    </Desc>
                </Card>
                <Card>
                    <Desc>
                        <a>Can I book a charging station in advance?</a>
                        <p>Yes, you can book a charging station in advance through our website or app. Select the station, choose an available time slot and charging port, and confirm your booking.</p>
                    </Desc>
                </Card>
                <Card>
                    <Desc>
                        <a>How do I cancel a booking?</a>
                        <p>To cancel a booking, go to your account, view your upcoming bookings, and select the 'Cancel' option next to the booking you wish to cancel. Please note that </p>
                    </Desc>
                </Card>
                <Card>
                    <Desc>
                        <a>How can I leave a review for a charging station?</a>
                        <p>After using a charging station, you can leave a review by visiting the station's page on our website. Click on the 'Leave a Review' button.</p>
                    </Desc>
                </Card>
                <Card>
                    <Desc>
                        <a>What information is available about each charging station?</a>
                        <p>Each charging station's page provides detailed information including location, availability, charging speed, connector types etc</p>
                    </Desc>
                </Card>
                
            </Content>
        </Container>
    </Wrapper>
    </>
  )
}

export default faq