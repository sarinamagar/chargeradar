import React, { useState } from "react";
import styled from "styled-components";
import ChargingStation from "../../Assets/Images/charge-station.png";
import FullImageViewer from "./FullImageViewer";
import yatri1 from '../../Assets/Images/Yatri-1.png'
import yatri2 from '../../Assets/Images/Yatri-2.jpg'
import yatri3 from '../../Assets/Images/Yatri-3.jpg'
import { useDispatch, useSelector } from "react-redux";
import { toggleImageViewer } from "../../State/Action/ImageViewerAction";
import chargingStationImage from '../../Assets/Images/charge-station.png'
import chargingStationImage2 from '../../Assets/Images/Yatri-1.png'
import chargingStationImage3 from '../../Assets/Images/charger.jpg'
import chargingStationImage4 from '../../Assets/Images/charger2.jpg'
import chargingStationImage5 from '../../Assets/Images/charger3.jpg'

const Wrapper = styled.div`
  z-index : 98;
`;
const Container = styled.div`
  justify-content: center;
  margin: 25px;
  display: flex;
  img{
    cursor: pointer;
  }
`;
const MainImage = styled.div`
  padding-right: 8px;
`;
const ImageOption = styled.div``;
const PrimaryImage = styled.div`
  position: relative;
`;
const SecondaryImage = styled.div`
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  background-color: rgba(45, 41, 41, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 96%;
  color: #ffffff;
  font-size: 18px;
  display: flex;
  justify-content: end;
  align-items: end;
  cursor: pointer;
  div{
    padding: 5px 12px;
    font-size : 16px;
  }
  &:hover{
    background-color: rgba(65, 64, 64, 0.58);
  }
`;
const getRandom = () =>{
  const images = [chargingStationImage, chargingStationImage2, chargingStationImage3, chargingStationImage4, chargingStationImage5]
  return images[Math.floor(Math.random() * 5)]
}
function ChargerImage({name}) {
  const imageViewerVisible = useSelector(state => state.toggleViewer)
  const dispatcher = useDispatch()
  return (
    <Wrapper>
      <Container onClick={()=>{dispatcher(toggleImageViewer(imageViewerVisible))}}>
        <MainImage>
          <img src={name === 'Yatri Motorcycles Experience Center' ? yatri1:getRandom()} alt="" height={200} width={250} />
        </MainImage>
        <ImageOption>
          <PrimaryImage>
            <img src={name === 'Yatri Motorcycles Experience Center' ? yatri2:getRandom()} alt="" height={96} width={150} />
            <Overlay></Overlay>
          </PrimaryImage>
          <SecondaryImage>
            <img src={name === 'Yatri Motorcycles Experience Center' ? yatri3:getRandom()} alt="" height={96} width={150} />
            <Overlay><div>5+ More </div></Overlay>
          </SecondaryImage>
        </ImageOption>
      </Container>
    </Wrapper>
  );
}

export default ChargerImage;
