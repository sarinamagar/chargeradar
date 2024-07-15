import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``;
const Icon = styled.div``;

function ImageIcon(props) {
  return (
    <Wrapper>
      <Icon>
        <img src={props.icon} alt="" height={props.height} />
      </Icon>
    </Wrapper>
  )
}

export default ImageIcon
