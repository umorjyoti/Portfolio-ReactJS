import React from 'react';
import styled from 'styled-components';

function ServiceCard({image,title,paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                {image}
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    background-color: var(--background-dark-color-2);
    .container{
        min-width: 22vw;
        padding: 1.2rem;
        border-left: 1px solid var(--border-color);
        border-right: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
        border-top: 8px solid var(--border-color);
        transition: all .4s ease-in-out;
        &:hover{
            border-top: 8px solid var(--primary-color);
            transform: translateY(3px);
        }
        h4{
            color:var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height : 3px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        p{
            padding: .8rem 0;
        }
        svg{
            font-size: 2.5rem;
            color: var(--primary-color);
        }
    }
`;

export default ServiceCard;
