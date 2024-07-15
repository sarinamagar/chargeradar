import React from "react";
import styled from "styled-components";
import Eclipse from "../../Assets/Images/Icons/eclipse.png";

const Wrapper = styled.div``;
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  margin-top : 10px;
`;
const Bullet = styled.div``;
const Text = styled.div`
  padding-left: 20px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  align-items: center;
  color: rgba(18, 39, 113, 0.76);
`;

function BulletText(props) {
  return (
    <Wrapper>
      <Container>
        <Bullet>
          <img src={Eclipse} alt="" height={15} />
        </Bullet>
        <Text>
          <span>{props.text}</span>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default BulletText;
