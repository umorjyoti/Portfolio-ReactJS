import React from 'react';
import styled from 'styled-components';
import Skills from '../Components/Skills';
import Resume from '../Components/Resume';
import { MainLayout } from '../styles/Layouts';

function ResumePage() {
    return (
        <ResumePageStyled>
            <MainLayout>
                <Skills/>
                <Resume/>
            </MainLayout>
        </ResumePageStyled>
    )
}


const ResumePageStyled = styled.div`
    

`;
export default ResumePage;
