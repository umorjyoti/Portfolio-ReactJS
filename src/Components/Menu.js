import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Pinterest from '@material-ui/icons/Pinterest';

function Menu({menuItem}) {
    return (
        <MenuStyled>
            {
                menuItem.map((item) => {
                    return (
                        <div className="griditem" key={item.id}>
                            <div className="portfolio-content">
                                <div className="portfolio-image">
                                    <img src={item.image} alt="" />
                                    <ul>
                                    <li>
                                        <a href={item.link1}>
                                            <GitHub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2}>
                                            <Pinterest />
                                        </a>
                                    </li>
                                </ul>
                                </div>
                               
                            </div>
                            <h6>{item.title}</h6>
                            <h6>{item.text}</h6>
                        </div>
                    )
                })
            }
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 2rem;
    .griditem{
        .portfolio-content{
            overflow: hidden;
            display: block;
            position: relative;
            h6{
                font-size: 1.5rem;
            }
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                }
                img{
                    width: 100%;
                    height: 30vh;
                    object-fit: cover;
                }
                ul{
                    transform: translateY(-600px);
                    position: absolute;
                    left: 50%;
                    top: 45%;
                    opacity: 0;
                    li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        height: 3rem;
                        width: 3rem;
                        border-radius: 50%;
                        margin: 0 .5rem;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                }
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all 0.4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    li:hover{
                        svg{
                            color:var(--white-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    height: calc(100% - 10%);
                    width: calc(100% - 4%);
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    transition:  all .4s ease-in-out;
                }
            }
        }
    }
    @media screen and (max-width:900px){
        grid-template-columns: repeat(2,1fr);
    }
    @media screen and (max-width:650px){
        grid-template-columns: repeat(1,1fr);
    }
`;

export default Menu;