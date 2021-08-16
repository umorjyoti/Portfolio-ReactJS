import React from 'react'
import styled from 'styled-components';
import avatar from '../img/umor.jpg';
import PrimaryButton from './PrimaryButton';
import { Link } from 'react-router-dom';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={avatar} alt="" />
            </div>

            <div className="right-content">
                <h4>I am <span>Umorjyoti</span></h4>
                <p className="paragraph">Computer Science Engineering student (7.5/10 CGPA) from Assam Kaziranga University with 
                proven coding and communication skills. Interned at Biolege where I developed the android application of 
                healthcare start-up to book appointment of doctors.. Seeking a SDE1 job to expand my knowledge. 
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Umorjyoti Chetia</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: Assamese, Hindi, English</p>
                        <p>: Assam Sivasagar</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <Link to="umorResume.pdf" target="_blank" download><PrimaryButton title={'Download CV'} /></Link>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled= styled.div`
    margin-top: 4rem;
    display: flex;
    @media screen and ( max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .right-content{
        h4{
            font-size:2rem;
            color:var(--white-color);
            span{
                font-size:2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            padding-bottom: 1.5rem;
            display: flex;
            
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight:600;
                }
            }
            .info , .info-title{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
    .left-content{
        z-index:2;
        width: 100%;
        img{
            height: 80%;
            object-fit: contain;
            width: 90%;
        }
    }
`;

export default ImageSection;