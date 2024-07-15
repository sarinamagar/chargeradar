import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div`
  background-color: rgba(30, 75, 138, 0.2);
  border-radius: 5px;
  padding: 8px 8px;
  margin: 0 10px;
  cursor: pointer;
  height : 75px;
  width : 85px;
  position : relative;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : space-around;
  border : solid 2px #ffffff17;
`;
const ConnectorType = styled.div`
  img {
      width: 35px;
      margin: auto ;
  }
`;
const ConnectorName = styled.div`
  color: rgba(65, 60, 60, 0.8);
  font-size: 14px;
  font-weight: 500;
  bottom : 10px;
  display : flex;
`;

function ConnectorButton(props) {
  const current = props.currentlySelectedCharger
  const [isSelected, setIsSelected] = useState()
  return (
    <Wrapper onClick={()=>props.setCurrentlySelectedCharger(props.name)}>
      {current === props.name? 
        <Container style={{border: "solid 2px #383838a6",
                            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }}>
          <ConnectorType>
            <img src={props.connector} alt="" />
          </ConnectorType>
          <ConnectorName>
            <a>{props.name}</a>
          </ConnectorName>
        </Container>
      :
        <Container>
          <ConnectorType>
            <img src={props.connector} alt="" />
          </ConnectorType>
          <ConnectorName>
            <a>{props.name}</a>
          </ConnectorName>
        </Container>
      }
      
    </Wrapper>
  );
}

export default ConnectorButton;
