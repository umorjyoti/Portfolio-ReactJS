import React from 'react';
import { MainLayout,InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone= <PhoneIcon />
    const email= <EmailIcon />
    const location= <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'}/>
            <ContactPageStyled>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name" id="name">Enter your name*</label>
                            <input id="name" type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email" id="email">Enter your email*</label>
                            <input id="email" type="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject" id="subject">Enter your subject*</label>
                            <input id="subject" type="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field">
                            <PrimaryButton title={'Send Email'}/>
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem 
                    icon={phone} 
                    title={'Phone'}
                    contact1={'+91 8136013922'}
                    contact2={'+91 7002055570'}
                    />
                    <ContactItem 
                    icon={email} 
                    title={'Email'}
                    contact1={'umorjyotichetia@gmail.com'}
                    contact2={'ujcheatia@gmail.com'}
                    />
                    <ContactItem 
                    icon={location} 
                    title={'Location'}
                    contact1={'Sivasagar Betbari, 785697'}
                    contact2={'Assam, India'}
                    />
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled=styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width:800px){
            grid-template-columns: repeat(1, 1fr);
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1,1fr);
            margin: auto;
            @media screen and (max-width:800px){
                margin-top: 2rem;
            }
            @media screen and (max-width:800px){
                width : 70%;
            }
            @media screen and (max-width:538px){
                width : 70%;
                margin:2 0;
            }
            @media screen and (max-width:443px){
                width : 100%;
                
            }   

        }
        .contact-title{
            h4{
                color:var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            margin: auto;
            @media screen and (max-width:502px){
                width: 80%;
            }
            @media screen and (max-width:336px){
                width: 70%;
                padding: 0;
                margin: auto;
            }
            @media screen and (max-width:300px){
                width: 60%;
                padding: 0;
                margin: auto;
            }
            .form-field{
                margin-top: .2rem;
                position: relative;
                width: 100%;
                margin-top: 2rem;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height:50px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color:inherit;
                    width: 100%;
                    padding: .8rem .1rem;
                }
            }
        }
    }
`;

export default ContactPage;
