import React from "react";
import styled from "styled-components";
import ImageIcon from "../Icon/ImageIcon";
import Charger1 from "../../Assets/Images/Charger/charger-1.png";
import Charger2 from "../../Assets/Images/Charger/charger-2.png";
import Charger3 from "../../Assets/Images/Charger/charger-3.png";
import Charger4 from "../../Assets/Images/Charger/charger-4.png";
import Charger5 from "../../Assets/Images/Charger/charger-5.png";

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 20px 42px;
`;
const Title = styled.div`
  font-size: 18px;
  color: #676666;
  font-size: 18px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Connectors = styled.div`
  display: flex;
  img {
    margin: 6px;
  }
`;
const Speed = styled.div`
  margin-right: 40px;
`;
const ChargingSpeed = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #5375ea;
`;
const SpeedDescription = styled.div`
  font-size: 14px;
  color: #9e9e9e;
`;

function ConnectorsInfo({details}) {
  return (
    <Wrapper>
      <Container>
        <Title>AVAILABLE CONNECTORS</Title>
        <Flex>
          <Connectors>
            <img src={Charger1} alt="" height={38} />
            <img src={Charger2} alt="" height={38} />
            <img src={Charger3} alt="" height={38} />
            <img src={Charger4} alt="" height={42} />
            <img src={Charger5} alt="" height={42} />
          </Connectors>
          <Speed>
            <ChargingSpeed>{details.max_speed} KW</ChargingSpeed>
            <SpeedDescription>Max Speed</SpeedDescription>
          </Speed>
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default ConnectorsInfo;
