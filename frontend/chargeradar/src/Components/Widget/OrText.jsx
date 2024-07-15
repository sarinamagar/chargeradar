import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Or = styled.div`
  font-style: italic;
  font-size: 18px;
`;

function OrText() {
  return (
    <Wrapper>
      <Or>OR</Or>
    </Wrapper>
  );
}

export default OrText;
