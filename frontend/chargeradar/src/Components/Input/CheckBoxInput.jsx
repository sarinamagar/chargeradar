import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    width: 22px;
    height: 22px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    margin-right: 10px;
    appearance: none;
    outline: none;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 5px;
      width: 6px;
      height: 12px;
      border: solid #122771;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      display: ${(props) => (props.checked ? "block" : "none")};
    }
  }

  span {
    font-size: 14px; /* Fixed typo: added 'px' */
    width: 85%;
    color:rgba(0, 0, 0, 0.4)
  }
`;

function CheckBoxInput(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Wrapper>
      <Container checked={isChecked}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span>{props.text}</span>
      </Container>
    </Wrapper>
  );
}

export default CheckBoxInput;
