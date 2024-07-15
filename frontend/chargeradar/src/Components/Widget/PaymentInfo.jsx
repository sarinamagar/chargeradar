import React from "react";
import styled from "styled-components";
import EsewaIcon from "../../Assets/Images/Icons/icon-esewa.png";
import KhaltiIcon from "../../Assets/Images/Icons/icon-khalti.png";
import FonePayIcon from "../../Assets/Images/Icons/icon-fone.png";
import AliIcon from "../../Assets/Images/Icons/icon-alipay.png";

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 20px 42px;
`;
const Title = styled.div`
  color: #676666;
  font-size: 18px;
`;
const Payment = styled.div``;
function PaymentInfo({details}) {
  const icons = {'khalti': KhaltiIcon, 'esewa':EsewaIcon,'fonepay':FonePayIcon,'alipay':AliIcon}
  return (
    <Wrapper>
      <Container>
        <Title>PAYMENT OPTIONS</Title>
        <Payment>
          {console.log(details)}
          {details.supported_payments.map((option)=>(
            <img src={icons[option]} alt="" height={60} />
          ))}
        </Payment>
      </Container>
    </Wrapper>
  );
}

export default PaymentInfo;
