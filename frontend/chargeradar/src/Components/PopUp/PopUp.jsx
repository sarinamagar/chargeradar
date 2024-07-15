import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.div`
  width: 400px;
  height: auto;
  box-shadow: rgba(121, 121, 133, 0.2) 0px 7px 20px 0px;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
`;
const Center = styled.div`
  width: fit-content;
  margin: auto;
`;
const Title = styled.div`
  color: #122771;
  font-weight: 500;
  font-size: 24px;
`;
const Subtitle = styled.div`
  margin-top: 16px;
  color: #464444;
  font-size: 20px;
`;
const Options = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: end;
`
const OptionA = styled.div`
  margin-right: 15px;
  color: #5375ea;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
const OptionB = styled.div`
  margin-right: 15px;
  color: #B64D4D;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
function PopUp(props) {
  return (
    <Wrapper>
      <Center>
        <Container>
          <Title>{props.title}</Title>
          <Subtitle>
            {props.subtitle}
          </Subtitle>
          <Options>
            <OptionA>{props.optionA}</OptionA>
            <OptionB>{props.optionB}</OptionB>
          </Options>
        </Container>
      </Center>
    </Wrapper>
  );
}

export default PopUp;
