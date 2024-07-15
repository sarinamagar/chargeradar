import React from 'react'
import styled from 'styled-components'
import arrowIcon from "../../Assets/Images/Icons/icon-arrow.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleImageViewer } from '../../State/Action/ImageViewerAction'
import chargingStationImage from '../../Assets/Images/charge-station.png'
import chargingStationImage2 from '../../Assets/Images/Yatri-1.png'
import chargingStationImage3 from '../../Assets/Images/charger.jpg'
import chargingStationImage4 from '../../Assets/Images/charger2.jpg'
import chargingStationImage5 from '../../Assets/Images/charger3.jpg'

const Wrapper = styled.div`
    position : absolute;
    height : 100%;
    width : 100%;
    background-color : #00000094;
    z-index : 199;
    margin-top : -15px;
    display : flex;
    justify-content : center;
    align-items : center;
`
const Container = styled.div`
    height : 70%;
    width : 60%;
    margin-top : -85px;
    background-color : white;
    border-radius : 12px;
    position : fixed;
    overflow-y : hidden;
`

const BackButton = styled.button`
  background-color : transparent;
  border : none;
  padding : 12px 16px;
  font-size : 14px;
  color : #122771;
  cursor: pointer;
  position : relative;
  display : flex;
`;
const BackIcon = styled.div`
  /* padding-top : 2px; */
  padding-right : 5px;
`

const Top = styled.div`
  position: sticky;
  top: 0;
  background-color : #ffffff;
  width: 100%; 
  z-index: 99; 
  height : 45px;
  width : 100%;
  display : flex;
  justify-content : space-between;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 100px 0px; */
`;

const ImagesSlider = styled.div`
  height : 100%;
  width : 100%;
  /* background-color : red; */
  margin : 20px;
  display : flex;
`
const MainImage = styled.div`
  width : 70%;
  display : flex;
  img{
    width : 80%;
    margin-top: auto;
    margin-top : 20px;
    margin-bottom : auto;
    margin-left : auto;
    margin-right : auto;

  }
`
const ImageOptions = styled.div`
  max-width : 40%;
  height : 80%;
  overflow-y : scroll;
  img{
    width : 80%;
    cursor: pointer;
  }
  /* display : flex; */
  /* flex-direction : column; */
`
const Title = styled.div`
  
`
function FullImageViewer(props) {
  const images = [chargingStationImage, chargingStationImage2, chargingStationImage3, chargingStationImage4, chargingStationImage5]
  const dispatch = useDispatch()
  return (
    <Wrapper>
        <Container>
          <Top>
            <BackButton onClick={() => {dispatch(toggleImageViewer())}}>
              <BackIcon>
                <img src= {arrowIcon} alt="" height={20}/> 
              </BackIcon>
              Back
            </BackButton>
          </Top>
          <Title>
          </Title>
          <ImagesSlider>
              <MainImage>
                <img src={images[2]} alt="" height={450}/>
              </MainImage>
              <ImageOptions>
                <img src={images[5]} alt="" />
                <img src={images[3]} alt="" />
                <img src={images[4]} alt="" />
                <img src={images[1]} alt="" />
              </ImageOptions>
          </ImagesSlider>
        </Container>
    </Wrapper>
  )
}

export default FullImageViewer