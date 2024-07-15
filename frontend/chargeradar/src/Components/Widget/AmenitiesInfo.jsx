import React from "react";
import styled from "styled-components";
import WifiIcon from "../../Assets/Images/Icons/icon-wifi.png";
import ParkingIcon from "../../Assets/Images/Icons/icon-parking.png";
import RestaurantIcon from "../../Assets/Images/Icons/icon-restaurant.png";
import WashroomIcon from "../../Assets/Images/Icons/icon-washroom.png";
import WheelChairIcon from "../../Assets/Images/Icons/icon-wheelchair.png";
import CartIcon from "../../Assets/Images/Icons/icon-cart.png";

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 20px 42px;
`;
const Title = styled.div`
  font-size: 18px;
  color: #676666;
  font-size: 18px;
`;
const Amenities = styled.div`
  img {
    margin: 4px;
  }
`;

function AmenitiesInfo({details}) {
  const amenitiesIcons = {'wifi':WifiIcon,'parking':ParkingIcon,'food':RestaurantIcon,'washroom':WashroomIcon,'disability':WheelChairIcon,'shopping':CartIcon}
  return (
    <Wrapper>
      <Container>
        <Title>AMENETIES</Title>
        <Amenities>
          {details.amenities.map((e)=>(
            <img src={amenitiesIcons[e]} alt="" height={36} />
          ))}
        </Amenities>
      </Container>
    </Wrapper>
  );
}

export default AmenitiesInfo;
