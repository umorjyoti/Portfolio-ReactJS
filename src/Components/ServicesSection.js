import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import LaptopIcon from '@material-ui/icons/Laptop';

function ServicesSection() {
    return (
       <InnerLayout>
           <ServicesSectionStyled>
                <Title title={'Services'} span={'services'}></Title>
                <div className="services">
                    <ServiceCard image={<CodeIcon/>} title={'Web Dev'} paragraph={'Have a Web project in mind , feel free to contact me.'} />
                    <div className="mid-card">
                    <ServiceCard image={<DeveloperModeIcon/>} title={'Android Dev'} paragraph={'I will develope your android application in flutter in a short span of time'} />
                    </div>
                    <ServiceCard image={<LaptopIcon/>} title={'Software Dev'} paragraph={'Share your software idea with me and we will start your project in no time'} />
                </div>
            </ServicesSectionStyled>
       </InnerLayout>
    )
}

const ServicesSectionStyled=styled.section`
    .services{
        margin-top:5rem;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap:1.5rem;
        @media screen and ( max-width:950px){
            grid-template-columns: repeat(2,1fr);
        }
        @media screen and ( max-width:650px){
            grid-template-columns: repeat(1,1fr);
        }
    }
    
`;

export default ServicesSection;
