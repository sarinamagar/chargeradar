import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Placeholder = styled.div`
  width: 70%; 

  input {
    width: 100%;
    padding: 6px 0; 
    font-size: 14px;
    border: none;
    border-bottom: 1px solid rgba(18, 39, 113, 0.7);
    outline: none;

    &:focus {
      border-bottom: 1px solid rgba(7, 16, 47, 0.7);
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.42);
      font-size: 18px;
    }
  }
`;
function FormInput(props) {
  return (
    <Wrapper>
      <Container>
        <Placeholder>
          <input type={props.type?'password':"text"} placeholder={props.placeholder} />
        </Placeholder>
      </Container>
    </Wrapper>
  );
}

export default FormInput;
