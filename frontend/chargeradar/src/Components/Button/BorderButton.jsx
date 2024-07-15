import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: fit-content;
  width: ${(props) => props.width || "auto"};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(18, 39, 113, 0.6); 
  padding:4px 40px;
  border-radius: 10px;
  margin: 16px 0px;
  cursor: pointer;
`;
const Icon = styled.div``;
const Title = styled.div`
    padding-left: 14px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.58);
    letter-spacing: 1;
`;

function BorderButton(props) {
  return (
    <Wrapper width={props.width}>
      <Container>
        <Icon>
          <img src={props.icon} alt="" height={props.size} />
        </Icon>
        <Title>{props.title}</Title>
      </Container>
    </Wrapper>
  );
}

export default BorderButton;
