import React from "react";
import styled from "styled-components";
import SaveImg from "../../Assets/Images/Icons/save.png";
import QrCodeImg from "../../Assets/Images/qrcode.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookingSuccess } from "../../State/Action/BookingFormAction";

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
  width: 300px;
  height: 45vh;
  box-shadow: rgba(121, 121, 133, 0.2) 0px 7px 29px 0px;
  background-color: white;
  padding: 40px;
  margin-top : -100px;
  border-radius : 8px;
`;
const Center = styled.div`
  width: fit-content;
  margin: auto;
  position : relative;
`;
const Content = styled.div`
  height : 100%;
  overflow-y : scroll;
`
const TopContainer = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  margin-top : -20px;
  margin-bottom : 10px;
`;
const Title = styled.div`
  color: #122771;
  font-size: 16px;
  font-weight: 500;
`;
const Margin = styled.div`
  margin: ${(props) => props.margin || "auto"};
`;
const Flex = styled.div`
  display: flex;
  cursor: pointer; 
`;
const Save = styled.div`
  display: flex;
  cursor: pointer;
  &:hover{
    color: rgb(13, 35, 114) !important;
  }
`;
const SaveText = styled.div`
  color: rgba(18, 39, 113, 0.8);
  margin: 3px 5px 0px;
  font-size: 16px;
`;
const SaveIcon = styled.div`
  margin-top: 5px;
`;
const Subtitle = styled.div`
  color: #464444;
  font-size: 14px;
`;
const Details = styled.div`
  font-size : 14px;
`;
const DetailsInfo = styled.div`
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
const QrCode = styled.div``;
function  BookingSuccess() {
  const dispatcher = useDispatch();
  const isBookingSuccessVisible = useSelector(state => state.BookingSuccessVisible)
  return (
    <Wrapper onClick={()=> {isBookingSuccessVisible && dispatcher(toggleBookingSuccess(true))}}>
      <Center>
        <Container>
          <TopContainer>
            <Title>
              <span>Booking Success</span>
            </Title>
            <Flex>
              <Save>
                <SaveIcon>
                  <img src={SaveImg} alt="" height={20} />
                </SaveIcon>
                <SaveText>save</SaveText>
              </Save>
            </Flex>
          </TopContainer>
          <Margin margin={"25px"}></Margin>
          <Content>
            <Subtitle>
              Please, show this token at the charging station for booking
              confirmation
            </Subtitle>
            <Details>
              <DetailsInfo>
                <p>
                  Booking ID : <b> 9842855</b>
                </p>
              </DetailsInfo>
              <DetailsInfo>
                <p>
                  Full Name : <b> Saugat Bhupal Singh</b>
                </p>
              </DetailsInfo>
              <DetailsInfo>
                <p>
                  Contact : <b> +977-981873646</b>
                </p>
              </DetailsInfo>
              <DetailsInfo>
                <p>
                  Connection Type : <b> Tesla charger</b>
                </p>
              </DetailsInfo>
              <DetailsInfo>
                <p>
                  Date and Time : <b> 11th April, 2024 10:40 a.m</b>
                </p>
              </DetailsInfo>
            </Details>
            <Center>
              <QrCode>
                <img src={QrCodeImg} alt="" height={120} />
              </QrCode>
            </Center>
          </Content>
        </Container>
      </Center>
    </Wrapper>
  );
}

export default BookingSuccess;
