import React from "react";
import styled from "styled-components";
import MenuBarUser from "../Components/MenuBar/MenuBarUser";
import LogoLarge from "../Components/Logo/LogoLarge";
import FormInput from "../Components/Input/FormInput";
import CheckBoxInput from "../Components/Input/CheckBoxInput";
import FilledButton from "../Components/Button/FilledButton";
import BorderButton from "../Components/Button/BorderButton";
import AppleLogo from "../Assets/Images/Icons/apple-logo.png";
import GoogleLogo from "../Assets/Images/Icons/google-logo.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Center = styled.div`
  width: fit-content;
  margin: auto;
`;
const Container = styled.div`
  width: 700px;
  height: auto;
  box-shadow: rgba(121, 121, 133, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;
const RegisterForm = styled.div`
  margin-top: 30px;
`;
const Flex = styled.div`
  display: flex;
`
const Margin = styled.div`
  margin: 50px 0px;
`;
const Padding = styled.div`
  padding: ${(props) => props.padding || "auto"};
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 1;
  color: rgba(0, 0, 0, 0.58);
  margin-bottom: 35px;
  text-align: center;
`;
const LeftContainer = styled.div`
  width: 480px;
`;
const RightContainer = styled.div`
  width: 480px;
`;

const TermsContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-top: 60px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0px;
`;
const Or = styled.div`
  font-style: italic;
  font-size: 1px;
  margin-top: 20px;
`;

function RegisterPage() {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <MenuBarUser />
      <Center>
        <Container>
          <RegisterForm>
            <Center>
              <Padding padding={"20px"}></Padding>
              <LogoLarge />
            </Center>
            <Title>Enter all the details below to create an account</Title>
            <Flex>
              <LeftContainer>
                <FormInput placeholder={"Your e-mail"} />
                <FormInput placeholder={"Create password"} type={'password'}/>
                <FormInput placeholder={"Confirm password"} type={'password'}/>
              </LeftContainer>
              <RightContainer>
                <FormInput placeholder={"Your full name"} />
                <FormInput placeholder={"Your mobile number"} />
                <FormInput placeholder={"Your address"} />
              </RightContainer>
            </Flex>
            <TermsContainer>
              <CheckBoxInput
                text={
                  " I agree to the terms and conditions, including eligibility requirements, proper use, payment of fees, data collection, limited liability, and compliance with laws. We may modify these terms at any time, and continued use signifies acceptance of any changes."
                }
              />
            </TermsContainer>
            <ButtonContainer>
              <FilledButton text={"Continue"} width={"45%"} onClick={()=>{alert("Account created");navigate('/login')}}/>
              <Or>OR</Or>
              <BorderButton
                title={"Sign in with Google"}
                icon={GoogleLogo}
                size={31}
                width={"45%"}
              />
              <BorderButton
                title={"Sign in with Apple"}
                icon={AppleLogo}
                size={33}
                width={"45%"}
              />
            </ButtonContainer>
          </RegisterForm>
        </Container>
      </Center>
    </Wrapper>
  );
}

export default RegisterPage;
