import React from "react";
import styled from "styled-components";
import CloseIcon from "../../Assets/Images/Icons/close-white.png";
import ArrowImg from "../../Assets/Images/arrow.png";
import GoogleMaps from "../../Assets/Images/google-maps.png";
import FilledButton from "../Button/FilledButton";
import { useDispatch } from "react-redux";
import NavigationMenuVisible from "../../State/Reducer/NavigationMenuReducer";
import { toggleNavigationMenu } from "../../State/Action/NavigationMenuAction";

const Wrapper = styled.div`
  width : 100vw;
  height : 100vh;
  overflow-y : hidden;
  z-index : 199 !important;
  display : flex;
  position : absolute;
  top : 35vh;
  left : 140vh !important;
`;
const Container = styled.div`
  box-shadow: rgba(172, 172, 181, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  height : 300px !important;
  width : 350px !important;
  bottom : 250px;
  background-color : red;
`;
const Center = styled.div`
  width: fit-content;
  margin: auto;
`;
const TopContainer = styled.div`
  background-color: #1257ae;
  display: flex;
  /* width: 425px; */
  height: 32px;
  border-radius: 8px 8px 0px 0px;
`;
const Close = styled.div`
  margin: 6px 12px;
  cursor: pointer;
`;
const Title = styled.div`
  color: #fff;
  font-size: 16px;
  margin-right: 16px;
`;
const BottomContainer = styled.div`
  width: 320px !important;
  height : 300px;
  overflow-x : hidden;
  height: auto;
  background-color :#fff;
  padding-left : 30px;
`;
const Details = styled.div``;
const DetailsInfo = styled.div`
  font-size: 16px;
  p {
    display: flex;
    color: #122771;
    b {
      margin-left: 6px;
      font-weight: 300;
      color: #5375ea;
    }
  }
`;
const Directions = styled.div`

`;
const DirectionsArrow = styled.div`
  margin-right: 20px;
  p {
    color: #a4a4a4;
    margin: 0%;
    text-align: center;
    font-size: 14px;
  }
`;
const Map = styled.div`
  background-color: rgba(229, 227, 227, 0.32);
  padding: 10px 30px;
  padding-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  p {
    color: #a4a4a4;
    margin: 0%;
    text-align: center;
    font-size: 14px;
  }
  &:hover{
    background-color: rgba(229, 227, 227, 0.52);
  }
`;
const Button = styled.div`
    padding:  20px;
    width : fit-content;
    margin : auto;
`

function NavigationInfo({cords}) {
  const dispatch = useDispatch() 
  return (
    <Wrapper>
      <Container>
        <TopContainer>
          <Close onClick={()=>dispatch(toggleNavigationMenu(true,{}))}>
            <img src={CloseIcon} alt="" height={22} />
          </Close>
          <Center>
            <Title>
              <span>Book a Charger</span>
            </Title>
          </Center>
        </TopContainer>
        <BottomContainer>
          <Details>
            <DetailsInfo>
              <p>
                From : <b>Rabi Bhawan, Soaltee Mode, Ktm</b>
              </p>
            </DetailsInfo>
            <DetailsInfo>
              <p>
                To : <b>Yatri Experience Center, Naxal, Ktm</b>
              </p>
            </DetailsInfo>
            <DetailsInfo>
              <p>
                Distance : <b>7.3 Km</b>
              </p>
            </DetailsInfo>
            <DetailsInfo>
              <p>
                Trip Duration : <b>23 minutes</b>
              </p>
            </DetailsInfo>
            <DetailsInfo>
              <p>
                ETA : <b>{new Date(Date.now() + 23 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</b>
              </p>
            </DetailsInfo>
          </Details>
          <Center>
            <Directions>
              <Map onClick={()=>{window.open(`https://www.google.com/maps/?q=${cords.dest.lat},${cords.dest.lng}`)}}>
                <Center>
                  <img src={GoogleMaps} alt="" height={76} />
                </Center>
                <p>View in Maps</p>
              </Map>
            </Directions>
          </Center>
          <Button>
            <FilledButton text={"Cancel"} width={"200px"} onClick={()=>dispatch(toggleNavigationMenu(true,{}))}/>
          </Button>
        </BottomContainer>
      </Container>
    </Wrapper>
  );
}

export default NavigationInfo;
