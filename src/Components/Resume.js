import React from 'react';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import styled from 'styled-components';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
    const briefcase= <BusinessCenterIcon/>
    const school= <SchoolIcon/>
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'}/>
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle title={'Working Experience'} icon={briefcase}/>
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2020 - 2021'}
                        title={'Flutter Developer Intern'}
                        subtitle={'Biolege'}
                        text={'Biolege is startup in the healthcare sector, my job as an intern was to code the UI in flutter provided my the team. It was a 3 months internship'}
                    />
                </div>
                <div className="small-title u-margin-top">
                    <SmallTitle title={'Educational Qualifications'} icon={school}/>
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2018 - Present'}
                        title={'Computer Science And Engineering'}
                        subtitle={'Kaziranga University'}
                        text={'Pursuing B.tech in Computer Science and Engineering from one of the most reputed universities of North East India'}
                    />
                    <ResumeItem 
                        year={'2016 - 2018'}
                        title={'Higher Secondary (Science)'}
                        subtitle={'Sivasagar Junior College'}
                        text={'Completed my HS from the best Junior College in Sivasagar, the most reputed private college in the district'}
                    />
                    <ResumeItem 
                        year={'2016'}
                        title={'Schooling'}
                        subtitle={'G.B.M.E High School'}
                        text={'Attended GBME High School, the oldest English School in the district. It located beside the famous Sivasagar Tank'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}


const ResumeStyled = styled.div`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-margin-top{
            margin-top: 4rem;
        }
    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume;
