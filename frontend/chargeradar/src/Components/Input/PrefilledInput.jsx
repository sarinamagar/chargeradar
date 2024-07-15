import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.div``;
const InputFieldContainer = styled.div``;
const InputField = styled.div`
  width: 85%;
  border-bottom: 1px solid rgba(38, 45, 55, 0.4);
  display: flex;
  input {
    width: 100%;
    padding: 4px 0px;
    font-size: 16px;
    border: none;
    outline: none;
    /* border-bottom: 1px solid rgba(38, 45, 55, 0.4); */
    &:focus {
    }
    img {
      width: 20px;
      height: 10px;
    }
  }
`;
const InputTitle = styled.div`
  color: #666e7d;
  font-size: 14px;
`;
const SuffixButton = styled.div`
  display: flex;
  cursor: pointer;
`;
const SuffixText = styled.div`
  color: #262d37;
  margin: 12px 5px 0px;
  font-size: 12px;
`;
const SuffixImage = styled.div`
  margin-top: 9px;
`;
function PrefilledInput(props) {
  return (
    <Wrapper>
      <Container>
        <InputTitle>{props.title}</InputTitle>
        <InputFieldContainer>
          <InputField>
            <input type="text" value={props.value} />
            <SuffixButton>
              <SuffixText>{props.suffixText}</SuffixText>
              <SuffixImage>
                <img src={props.suffixIcon} height={props.height} alt="" />
              </SuffixImage>
            </SuffixButton>
          </InputField>
        </InputFieldContainer>
      </Container>
    </Wrapper>
  );
}

export default PrefilledInput;
