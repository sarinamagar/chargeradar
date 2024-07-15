import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
    border : none;
    width : fit-content !important;
    background-color : transparent;
    font-size : 14px !important;
`
function BorderlessInput(props) {
  return (
    <>
        <Wrapper placeholder={props.placeholder} onChange={(e)=>(props.onChange(e.target.value))} onKeyDown={(e)=>props.onKeyDown(e)}/>
    </>
  )
}

export default BorderlessInput