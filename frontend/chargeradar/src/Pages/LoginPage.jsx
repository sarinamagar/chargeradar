import React from "react";
import styled from "styled-components";
import MenuBarUser from "../Components/MenuBar/MenuBarUser";
import LoginForm from "../Components/Forms/LoginForm";
import BulletText from "../Components/Widget/BulletText";
import FilledButton from "../Components/Button/FilledButton";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Container = styled.div`
  display: flex;
  width : fit-content;
  margin : auto;
`;
const RegisterInfo = styled.div`
  margin-top: 50px;
`;
const RegisterContainer = styled.div`
  font-weight: 300;
`;
const Margin = styled.div`
   margin: ${(props) => props.margin || "auto"};
`;
const Title = styled.div`
  color: #122771;
  font-size: 25px;
`;
const Subtitle = styled.div`
  color: rgba(0, 0, 0, 0.58);
  font-size: 20px;
  margin : 15px 0;
`;
const Agreement = styled.div`
  margin: 30px 0px;
  width: 900px;
`;
function LoginPage() {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <MenuBarUser />
      <Container>
        <LoginForm />
        <RegisterInfo>
          <RegisterContainer>
            <Title>Not Registered Yet ?</Title>
            <Subtitle>
              Sign Up immediately because you are missing out{" "}
            </Subtitle>
            <Margin></Margin>
            <BulletText text={"Smart Connectivity"} />
            <BulletText text={"Pre-Book Your Charger"} />
            <BulletText text={"Communicate With Any Charging Station"} />
            <BulletText text={"Cashless Payment"} />
            <BulletText text={"And much more ....."} />
            <Margin margin={"50px"}></Margin>
            <Agreement>
              <span>
                By signing up and using ChargeRadar, you agree to our terms and
                conditions, including eligibility requirements, proper use,
                payment of fees, data collection, limited liability, and
                compliance with laws. We may modify these terms at any time, and
                continued use signifies acceptance of any changes.
              </span>
            </Agreement>
            <FilledButton text={"Create Account"} width={"46%"} onClick = {()=>{navigate("/signup")}}/>
          </RegisterContainer>
        </RegisterInfo>
      </Container>
    </Wrapper>
  );
}

export default LoginPage;
