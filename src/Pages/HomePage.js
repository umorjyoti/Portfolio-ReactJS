import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particle';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle/>
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Umorjyoti Chetia</span></h1>
                <p>Welcome to my website, want any project done please contact me
                     and take a look at my work and please leave a review in the contact page.Thank you.</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/umorjyoti-chetia-207726156/" target="_blank" rel="noopener noreferrer" className="icon i-linkedin"><LinkedinIcon/></a>
                    <a href="https://github.com/umorjyoti/" target="_blank" rel="noopener noreferrer" className="icon i-github"><GithubIcon/></a>
                    <a href="https://www.instagram.com/umorjyoti" target="_blank" rel="noopener noreferrer" className="icon i-instagram"><InstagramIcon/></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js{
        position: absolute;
        top: 0;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align:center;
        width:80%;
        h1{
            padding: .5rem;
        }
    }
    .icons{
        display:flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border:2px solid var(--border-color);
            display:flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding:.5rem;
            transition: All .4s ease-in-out;
            &:not(:last-child){
                margin-right: .5rem;
            }
            &:hover{
                border:2px solid var(--primary-color);
                color:var(--primary-color);
                cursor: pointer;
            }
        }
        .i-github{
                &:hover{
                border:2px solid #6e5494;
                color: #6e5494;
            }
            }
            .i-linkedin{
                &:hover{
                border:2px solid #2867B2;
                color: #2867B2;
            }
            }
            .i-instagram{
                &:hover{
                border:2px solid #DD2A7B;
                color: #DD2A7B;
            }
            }
    }
`;

export default HomePage;
;