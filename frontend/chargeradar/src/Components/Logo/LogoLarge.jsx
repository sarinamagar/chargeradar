import React from "react";
import styled from "styled-components";
import logoImg from "../../Assets/Images/logo.png";

const Logo = styled.div`
  display: flex;
  margin: 0%;
  p {
    display: flex;
    color: #122771;
    font-size: 22px;
    margin: 0%;
    b {
      font-weight: 400;
      color: #5375ea;
      font-size: 22px;
    }
  }
  span{
    color: rgba(0, 0, 0, 0.49);
    font-size: 16px;
    font-style: italic;
  }
`;
const LogoText = styled.div``;
function LogoLarge() {
  return (
    <Logo>
      <img src={logoImg} alt="" height="80px" />
      <LogoText>
        <p>
          Charge<b>Radar</b>
        </p>
        <span>“Find all your chargers”</span>
      </LogoText>
    </Logo>
  );
}

export default LogoLarge;
