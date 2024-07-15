import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DirectionButton from "../Button/DirectionButton";
import FilledButton from "../Button/FilledButton";
import ImageIcon from "../Icon/ImageIcon";
import Star from "../../Assets/Images/Icons/star_filled.png";
import StarUnfilled from '../../Assets/Images/Icons/star_unfilled.png'
import { calculateDistance } from "../../Utils/CalculateDistanceFromUserLocation";
import { useDispatch } from "react-redux";
import { toggleBookingForm } from "../../State/Action/BookingFormAction";

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 0px 42px;
`;

const TopInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const BottomInfoContainer = styled.div`
  display : flex;
  justify-content : space-between;
  margin : auto 8px;
`
const Column = styled.div`
  margin :1px;
  max-width : 160px;
`

const Title = styled.div`
  color: #676666;
  font-size: 16px;
`;

const Subtitle = styled.div`
  color: #808080;
  font-size: 14px;
  font-weight: 300;
`;

const Text = styled.div``;

const Direction = styled.div`
  width : fit-content;
  margin : auto;
`
const Review = styled.div`
  display: flex;
  margin-top : 12px;
`;
const Phone = styled.div`
  color: #808080;
`
const Stars = styled.div`
  display: flex;
  margin-right: 4px;
  align-items : baseline;
`;

const ReviewText = styled.div`
  font-size: 12px;
  color: #9e9e9e;
`;

const AvailableText = styled.div`
  font-size: 14px;
  color: #9e9e9e;
  text-align : center;
  p{
    margin-top : 6px;
  }
`;

function ChargerInfo(props) {
  const details = props.details
  const stars = [1,2,3,4,5]
  const cords = {
                  origin: 
                    {
                      lat: props.userLocation.lat, 
                      lng :props.userLocation.lng
                    },
                  dest:
                    {
                      lat: details.latitude, 
                      lng :details.longitude
                    }
                }
  const dispatch = useDispatch()
  return (

    <Wrapper>
      {console.log(details.status)}
      <Container>
        <TopInfoContainer>
          <Column>
            <Text>
              <Title>{details.name}</Title>
              <Subtitle>{details.address.toUpperCase()}</Subtitle>
            </Text>
          </Column>
          <Column>
            <Direction>
              {props.mapRef && <DirectionButton cords ={cords} mapRef = {props.mapRef} />}  
            </Direction>
            <AvailableText>{details.status === 'unavailable' ? "Unavailable":"Open Now"}</AvailableText>
          </Column>
          <Column>
            <FilledButton text={"BOOK NOW"} onClick = {() => dispatch(toggleBookingForm())}/>
            <AvailableText><p>10:00 AM - 11:00 PM</p></AvailableText>
          </Column>
        </TopInfoContainer>
        <BottomInfoContainer>
          <Phone>
            <p>Ph/Tel- {details.telephone}</p>
          </Phone>
          <Review>
            <Stars>
              {stars.map((e)=>(
                    <img src={details.rating >= e? Star: StarUnfilled} alt="" height={20} />
              ))}
              <ReviewText>({details.raters} raters)</ReviewText>
            </Stars>
          </Review>
        </BottomInfoContainer>
      </Container>
    </Wrapper>
  );
}

export default ChargerInfo;
