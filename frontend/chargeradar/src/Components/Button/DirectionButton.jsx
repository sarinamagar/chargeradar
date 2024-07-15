import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DirectionIcon from "../../Assets/Images/Icons/direction-icon.png";
import { calculateDistance } from "../../Utils/CalculateDistanceFromUserLocation";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavigationMenu } from "../../State/Action/NavigationMenuAction";

const Wrapper = styled.div`
  height: fit-content;
`;
const Icon = styled.div`
  height: 30px;
`;
const Text = styled.div`
  color: #8b9dea;
  font-size: 12px;
`;
const Button = styled.div`
  cursor : pointer;
`
function DirectionButton(props) {
  const [distance, setDistance] = useState()
  const dispatch = useDispatch()
  const cords = props.cords
  useEffect(()=>{
    const getDistance = async()=>{
      const distance = await calculateDistance(cords.origin.lat, cords.origin.lng, cords.dest.lat, cords.dest.lng )
      setDistance(distance)
    }
    getDistance()
  })
  const drawRoute = () => {
    dispatch(toggleNavigationMenu(false, cords))
    if (!window.google || !window.google.maps) {
      console.error('Google Maps JavaScript API is not loaded.');
      return;
    }

    const origin = new window.google.maps.LatLng(cords.origin.lat, cords.origin.lng);
    const destination = new window.google.maps.LatLng(cords.dest.lat, cords.dest.lng);

    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      polylineOptions: {
        strokeColor: '#5375EA', 
        strokeOpacity: 1.0,
        strokeWeight: 4,
      },
      suppressMarkers: true
    });

    directionsRenderer.setMap(props.mapRef);

    const request = {
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
        console.log(result)
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  };
  return (
    <Wrapper>
      <Button onClick={()=>drawRoute()}>
        <Icon>
          <img src={DirectionIcon} alt="" height={32} />
        </Icon>
        <Text>{distance} km</Text>
      </Button>
    </Wrapper>
  );
}

export default DirectionButton;
