import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  height: fit-content;
  width: ${(props) => props.width || "auto"};
  border : none;
  outline : none;
  background-color : transparent;
`;
const Container = styled.div`
  background-color: #122771;
  padding: 8px 24px;
  cursor: pointer;
`;
const Text = styled.div`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
`;

function FilledButton(props) {
  return (
    <Wrapper width={props.width} onClick={()=>{props.onClick()}}>
      <Container onClick={()=>props.onClick()}>
        <Text>{props.text}</Text>
      </Container>
    </Wrapper>
  );
}

export default FilledButton;
