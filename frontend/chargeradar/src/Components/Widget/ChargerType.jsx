import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left : 20px;
`
const Container = styled.div`
    display : flex;
    align-items : center;
`
const Icon = styled.div`
    img {
        height : 40px;
    }
    padding : 8px;
`
const Text = styled.div`
    font-weight : 500;
    color : #122771;
    font-size : 14px;
`
const SubText = styled.div`
    font-weight : 200;
    color : #787272;
    font-size : 12px;`

function ChargerType(props) {
  return (
    <Wrapper>
        <Container>
            <Icon>
                <img src={props.icon} alt="" />
            </Icon>
            <Text>
                {props.text}
                <SubText>
                    {props.subText && props.subText}
                </SubText>
            </Text>
        </Container>
    </Wrapper>
  )
}

export default ChargerType