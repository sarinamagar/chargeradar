import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Review from './Review';
import ReviewStars from '../Input/ReviewStars';
import ReviewInput from '../Input/ReviewInput';
import FilledButton from '../Button/FilledButton';
import { addReview, getReviews } from '../../Service/ReviewService';


const Wrapper = styled.div``;
const Container = styled.div`
    margin: 20px 42px;  
`;
const Title = styled.div`
  font-size: 18px;
  margin: 20px 42px;
  color: #676666;
  font-size: 18px;
  `
const Line = styled.div`
    height : 1px;
    width : 33px;
    margin : auto;
    background-color : #0000003f;
`
const AddReviews = styled.div`
    margin-top : 20px;
    display : flex;
    align-items: center;
`
const Right = styled.div`
    height : 95px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around ;
    button{
        width : fit-content;
        margin-left : 10px;
        margin-top : 5px;
        div{
            font-size : 12px !important;
        }
    } 
`
function Reviews(props) {
    const [review, setReview] = useState()
    const [allReviews, setReviews] = useState()
    const [addReview, setAddReview] = useState()
    useEffect(() => {
        const fetchReviews = () => {
            const reviews = getReviews(props.id);
            setReviews(reviews || []); 
        };
        fetchReviews();
        console.log(allReviews)
    }, [props.id]);
    return (
        <Wrapper>
            <Title>Reviews</Title>
            <Container>
                {addReview && 
                <>
                    <Review text={review}/>
                    <Line/>
                </>
                }
                {/* {allReviews.map((review)=>(
                    <>
                     <Review text={`"${review}"`}/>
                     <Line/>
                    </>
                ))}
                 */}
                <AddReviews>
                    <ReviewInput onChange={setReview}/>
                    <Right>
                        <ReviewStars/>
                        <FilledButton text ={"Add Review"} onClick = {()=>{setAddReview(review)}}/>
                    </Right>
                </AddReviews>
            </Container>
        </Wrapper>
    )
}

export default Reviews