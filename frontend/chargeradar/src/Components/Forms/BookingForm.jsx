import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../Assets/Images/Icons/close.png";
import ConnectorButton from "../Button/ConnectorButton";
import Charger1 from "../../Assets/Images/Charger/charger-1.png";
import Charger2 from "../../Assets/Images/Charger/charger-2.png";
import Charger3 from "../../Assets/Images/Charger/charger-3.png";
import Charger4 from "../../Assets/Images/Charger/charger-4.png";
import Charger5 from "../../Assets/Images/Charger/charger-5.png";
import EditImg from "../../Assets/Images/Icons/edit.svg";
import Location from "../../Assets/Images/Icons/location.png";
import PrefilledInput from "../Input/PrefilledInput";
import FilledButton from "../Button/FilledButton";
import { useDispatch } from "react-redux";
import {toggleBookingForm, toggleBookingSuccess} from "../../State/Action/BookingFormAction"

const Wrapper = styled.div`
  width : 100vw;
  height : 100vh;
  overflow-y : hidden;
  z-index : 199 !important;
  background-color : #0000006d;
  display : flex;
  position : absolute;
  margin-top : -15px;
`;
const Container = styled.div`
  width: 400px;
  height: 60vh;
  box-shadow: rgba(121, 121, 133, 0.2) 0px 7px 29px 0px;
  background-color: white;
  padding: 40px;
  margin-top : -100px;
  border-radius : 8px;
`;
const Items = styled.div`
  overflow-y : scroll;  
  height : 100%;
`;

const TopContainer = styled.div`
  display : flex;
  align-items : center;
  margin-top : -20px;
  margin-bottom : 10px;
`;
const Title = styled.div`
  color: #122771;
  font-size: 18px;
  font-weight: 500;
  text-align : center;
  width : fit-content;
  margin : auto;
`;
const Close = styled.div`
  cursor: pointer;
`;
const ChargersContainer = styled.div`
  margin: 20px auto;
`;
const TopRow = styled.div`
  display: flex;
  margin: 20px 0;
`;
const BottomRow = styled.div`
  display: flex;
  margin: 20px 0;
`;
const DateContainer = styled.div`
  margin : auto 10px;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap : wrap;
`;
const DateButton = styled.div`
  background-color: #a5b7d0;
  width: 60px;
  border-radius: 5px;
  text-align: center;
  padding: 8px 24px;
  margin: 20px 15px 0px 0px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border : 2px solid white;
`;
const Margin = styled.div`
  margin: ${(props) => props.margin || "auto"};
`;
const TimeContainer = styled.div`
  margin : auto 10px;  
  width : 100%;
  height : auto;
`;
const DetailsContainer = styled.div`
  margin : auto 10px;
`;
const DetailsInput = styled.div`
  margin : auto 10px;
`;
const Center = styled.div`
  width: fit-content;
  margin: auto;
`;

function BookingForm() {
  const dispatch = useDispatch();
  const [currentlySelectedCharger, setCurrentlySelectedCharger] = useState(null)
  const [currentlySelectedDate, setCurrentlySelectedDate] = useState()
  const [currentlySelectedTime, setCurrentlySelectedTime] = useState(null)
  const times = ['7:00 a.m','8:00 a.m','9:00 a.m','10:00 a.m','11:00 a.m','12:00 p.m','1:00 p.m','2:00 p.m','3:00 p.m','4:00 p.m','5:00 p.m','6:00 p.m','7:00 p.m']
  return (
    <Wrapper>
      <Center>
        <Container>
            <TopContainer>
              <Close onClick={()=>{dispatch(toggleBookingForm(true))}}>
                <img src={CloseIcon} alt="" height={18} />
              </Close>
              <Title>
                <span>Book a Charger</span>
              </Title>
            </TopContainer>
          <Items>
            <ChargersContainer>
              <TopRow>
                <ConnectorButton connector={Charger1} name={"AC Type-A"} currentlySelectedCharger = {currentlySelectedCharger} setCurrentlySelectedCharger = {setCurrentlySelectedCharger}/>
                <ConnectorButton connector={Charger2} name={"AC Type-B"} currentlySelectedCharger = {currentlySelectedCharger} setCurrentlySelectedCharger = {setCurrentlySelectedCharger}/>
                <ConnectorButton connector={Charger3} name={"AC GB/T"} currentlySelectedCharger = {currentlySelectedCharger} setCurrentlySelectedCharger = {setCurrentlySelectedCharger}/>
              </TopRow>
              <BottomRow>
                <ConnectorButton connector={Charger4} name={"DC CCS1"} currentlySelectedCharger = {currentlySelectedCharger} setCurrentlySelectedCharger = {setCurrentlySelectedCharger}/>
                <ConnectorButton connector={Charger5} name={"DC CCS2"} currentlySelectedCharger = {currentlySelectedCharger} setCurrentlySelectedCharger = {setCurrentlySelectedCharger}/>
                <ConnectorButton connector={Charger5} name={"TESLA"} currentlySelectedCharger = {currentlySelectedCharger} setCurrentlySelectedCharger = {setCurrentlySelectedCharger}/>
              </BottomRow>
            </ChargersContainer>
            <DateContainer>
              <SubTitle>Select Date</SubTitle>
              <ButtonContainer>
                <DateButton style={currentlySelectedDate === "Today"? {border: "solid 2px #383838a6",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }:{}} 
                          onClick={() => {setCurrentlySelectedDate("Today")}}>Today
                </DateButton>
                <DateButton style={currentlySelectedDate === "Tomorrow"? {border: "solid 2px #383838a6",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }:{}} 
                          onClick={() => {setCurrentlySelectedDate("Tomorrow")}}>Tomorrow
                </DateButton>
              </ButtonContainer>
            </DateContainer>
            <Margin margin={"30px"}></Margin>
            <TimeContainer>
              <SubTitle>Select Time</SubTitle>
              <ButtonContainer>
                {times.map((time,index)=>(
                    <DateButton key = {index} style={currentlySelectedTime === time? {border: "solid 2px #383838a6",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }:{}} 
                      onClick={() => {setCurrentlySelectedTime(time)}}>{time}
                    </DateButton>
                ))}
                
              </ButtonContainer>
            </TimeContainer>
            <Margin margin={"30px"}></Margin>
            <DetailsContainer>
              <SubTitle>Details</SubTitle>
              <Margin margin={"16px"}></Margin>
            </DetailsContainer>
            <DetailsInput>
              <PrefilledInput
                title={"Name"}
                value={"Sarina Magar"}
                suffixText={"EDIT"}
                suffixIcon={EditImg}
              />
              <Margin margin={"16px"}></Margin>
              <PrefilledInput
                title={"Phone Number"}
                value={"+977-9818733646"}
                suffixText={"EDIT"}
                suffixIcon={EditImg}
                height={"15px"}
              />
              <Margin margin={"16px"}></Margin>
              <PrefilledInput
                title={"Your Location"}
                value={"# Rabi Bhawan, Soaltee , Kathmandu 44600.."}
                suffixIcon={Location}
                height={"34px"}
              />
            </DetailsInput>
            <Margin margin={"16px"}></Margin>
            <Center>
              <FilledButton text={"Book Now"} width={"230px"} onClick = {()=>{dispatch((toggleBookingSuccess(false))); dispatch(toggleBookingForm(true))}}/>
            </Center>
          </Items>
        </Container>
      </Center>
    </Wrapper>
  );
}

export default BookingForm;
