import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin : 0;
    width : 100%;
    font-size : 16;
    color : #29282873;
`
function Review({text}) {
  return (
    <Wrapper>
        <p>
            {text}
        </p>
    </Wrapper>
  )
}

export default Review