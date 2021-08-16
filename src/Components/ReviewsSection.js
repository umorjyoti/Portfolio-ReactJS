import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ReviewItem from './ReviewItem';

function ReviewsSection() {
    return (
            <ReviewsSectionStyled>
                <Title title={'Reviews'} span={'Reviews'}/>
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem text={'Putting together a website is a task, finding the right individual or company is even more complex. I did my search around looking for this particular individual that has the ability to create, design and optimized my web site. Not only he have great taste in design but he can guide you through the process and beyond.'}/>
                        <ReviewItem text={'Excellent, working with him was great.  Thanks to his knowledge and determination our website looks great and functions really good.  I am recommending anyone that is looking for a custom website to give him a call and speak to him, he will guide you to the right direction.'}/>
                    </div>
                </InnerLayout>
            </ReviewsSectionStyled>
    )
}

const ReviewsSectionStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 1.2rem;
        width: 100%;
        @media screen and ( max-width:650px){
            grid-template-columns: repeat(1,1fr);
        }
    }
`;

export default ReviewsSection;
