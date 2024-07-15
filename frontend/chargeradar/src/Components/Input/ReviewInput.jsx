import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    
`
const TextInput = styled.textarea`
    width : 270px;
    height : 85px;
    border : none;
    background-color : #b7b7b725;
    color : #00000069;
    padding : 5px;
    font-size : 12px;
    &:focus{
        outline:  none;
    }
`
function ReviewInput({onChange}) {
  return (
    <Wrapper>
        <TextInput onChange={(e)=>onChange(e.target.value)}/>
    </Wrapper>
  )
}

export default ReviewInput