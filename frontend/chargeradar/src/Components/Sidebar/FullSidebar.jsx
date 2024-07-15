import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChargerImage from "../Widget/ChargerImage";
import ChargerInfo from "../Widget/ChargerInfo";
import ConnectorsInfo from "../Widget/ConnectorsInfo";
import AmenitiesInfo from "../Widget/AmenitiesInfo";
import PaymentInfo from "../Widget/PaymentInfo";
import arrowIcon from "../../Assets/Images/Icons/icon-arrow.png"
import shareIcon from "../../Assets/Images/Icons/icon-share.png"
import { fetchLocation } from "../../Utils/GetLocation";
import { useDispatch } from "react-redux";
import Reviews from "../Widget/Reviews";

const Wrapper = styled.div`
  padding: 30px;
  overflow-y : hidden;
`;
const Container = styled.div`
  width: 500px;
  height: 680px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  overflow-y : scroll;
  position: relative;
`;
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
const ShareIcon = styled.div`
  padding : 12px 16px;
  cursor: pointer;
  font-size : 14px;
  color : #122771;
  display : flex;
  align-content : center;
  a{
    margin-right : 4px;
  }
`
const Top = styled.div`
  position: sticky;
  top: 0;
  background-color : #ffffff;
  width: 100%; 
  z-index: 99; 
  height : 45px;
  width : 500px;
  display : flex;
  justify-content : space-between;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 100px 0px; */
`;
function FullSidebar(props) {
  const [location, setLocation] = useState()
  // const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const userLocation = await fetchLocation();
        setLocation(userLocation);
      } catch (error) {
        console.error("Error fetching location: ", error);
      }
    };
    getLocation();
  }, []);
  return (
    <Wrapper>
      {location &&
        <Container>
        <Top>
          <BackButton onClick={() => props.onClick(!props.status)}>
            <BackIcon>
              <img src= {arrowIcon} alt="" height={20}/> 
            </BackIcon>
            Back
          </BackButton>
          <ShareIcon>
            <a>Share</a>
            <img src= {shareIcon} alt="" height={20}/> 
          </ShareIcon>
        </Top>
        <ChargerImage name = {props.charger.details.name}/>
        <ChargerInfo details={props.charger.details} userLocation = {location} mapRef = {props.charger.mapRef}/>
        <ConnectorsInfo details ={props.charger.details}/>
        <AmenitiesInfo details = {props.charger.details}/>
        <PaymentInfo details = {props.charger.details}/>
        <Reviews id = {props.charger.details.id}/>
      </Container>
      }
      
    </Wrapper>
  );
}

export default FullSidebar;
