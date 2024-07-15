import React from "react";
import styled from "styled-components";
import LogoLarge from "../Logo/LogoLarge";
import AppleLogo from "../../Assets/Images/Icons/apple-logo.png";
import GoogleLogo from "../../Assets/Images/Icons/google-logo.png";
import FormInput from "../Input/FormInput";
import CheckBoxInput from "../Input/CheckBoxInput";
import FilledButton from "../Button/FilledButton";
import BorderButton from "../Button/BorderButton";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding: 50px 0;
  padding-right: 140px;
`;
const Container = styled.div`
  width: 400px;
  height: auto;
  box-shadow: rgba(121, 121, 133, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;
const Center = styled.div`
  width: fit-content;
  margin: auto;
`;
const Margin = styled.div`
  margin: ${(props) => props.margin || "auto"};
`;
const Padding = styled.div`
  padding: ${(props) => props.padding || "auto"};
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1;
  color: rgba(0, 0, 0, 0.58);
  margin-bottom: 25px;
  margin-top : 20px;
  text-align: center;
`;
const ForgotText = styled.div`
  text-align: end;
  margin-right: 15%;
  a {
    text-decoration: none;
    color: rgba(18, 39, 113, 0.5);
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
  }
`;
const RememberMe = styled.div`
  margin: 16px 70px;
`;
const Or = styled.div`
  font-style: italic;
  font-size: 18px;
  margin-top: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

function LoginForm() {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Container>
        <Center>
          <Padding padding={"30px"}></Padding>
          <LogoLarge />
        </Center>
        <Title>Enter details to login</Title>
        <FormInput placeholder={"Your e-mail"} />
        <FormInput placeholder={"Password"} type={'password'}/>
        <ForgotText>
          <a href="">Forgot Password?</a>
        </ForgotText>
        <RememberMe>
          <CheckBoxInput text={"Remember me"} />
        </RememberMe>
        <ButtonContainer>
          <FilledButton text={"Continue"} width={"70%"} onClick={()=>{alert("Logged In"); navigate('/')}}/>
          <Or>OR</Or>
          <BorderButton
            title={"Sign in with Google"}
            icon={GoogleLogo}
            width={"70%"}
            size={31}
          />
          <BorderButton
            title={"Sign in with Apple"}
            icon={AppleLogo}
            width={"70%"}
            size={33}
          />
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
}

export default LoginForm;
