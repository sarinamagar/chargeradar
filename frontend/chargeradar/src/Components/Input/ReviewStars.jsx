import React, { useState } from 'react'
import styled from 'styled-components'
import starUnfilled from '../../Assets/Images/Icons/star_unfilled.png'
import starFilled from '../../Assets/Images/Icons/star_filled.png'

const Wrapper = styled.div`
    img{
        cursor: pointer;
    }
`
function ReviewStars() {
    const [numberStars, setNumberStars] = useState(1)
  return (
    <Wrapper>
        <img src={starFilled} onClick= {()=>{setNumberStars(1)}} alt="" height={25}/>
        <img src={numberStars > 1 ? starFilled : starUnfilled}  onClick= {()=>{setNumberStars(2)}} alt="" height={25}/>
        <img src={numberStars > 2 ? starFilled : starUnfilled} onClick= {()=>{setNumberStars(3)}} alt="" height={25}/>
        <img src={numberStars > 3 ? starFilled : starUnfilled} onClick= {()=>{setNumberStars(4)}} alt="" height={25}/>
        <img src={numberStars > 4 ? starFilled : starUnfilled} onClick= {()=>{setNumberStars(5)}} alt="" height={25}/>
    </Wrapper>
  )
}

export default ReviewStars