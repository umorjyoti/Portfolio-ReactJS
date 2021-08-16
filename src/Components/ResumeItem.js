import React from 'react';
import styled from 'styled-components';

function ResumeItem({year,title,subtitle,text}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    
    padding-bottom: 3rem;
    .left-content{
        padding-left: 20px;
        width:20%;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left:-10px;
            background-color: var(--background-dark-color);
            height:15px;
            width: 15px;
            border-radius:50%;
            border:2px solid var(--border-color);
        }
        p{
            display:inline-block;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            width: 3rem;
            height: 2px;
            background-color: var(--border-color);
        }
        h5{
            color:var(--primary-color);
            font-size:2rem;
            padding-bottom:.4rem ;
            @media screen and (max-width:425){
                font-size:1.5rem;
            }
        }
        h6{
            padding-bottom: .4rem;
            font-size:1.8rem;
            @media screen and (max-width:425){
                font-size:1.4rem;
            }
        }
    }
    @media screen and (max-width:425){
        font-size: 60%;
    }
`;

export default ResumeItem;
