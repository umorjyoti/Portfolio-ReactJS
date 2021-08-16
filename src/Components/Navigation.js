import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName = "active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName = "active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName = "active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName = "active-class" exact>Portfolio</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to="/blogs" activeClassName = "active-class" exact>Blogs</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName = "active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 My Portfolio Website</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display:flex;
    flex-direction:column;
    justify-content:space-between; 
    align-items:center;
    height:100%;
    width:100%;
    border-right: 1px solid var(--border-color);

    .avatar{
        width:100%;
        height:40%;
        border-bottom: 1px solid var(--border-color);
        text-align:center;
        padding:1rem 0rem;
        img{
            width:80%;
            height:80%;
            object-fit: cover;
            border-radius:50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width:100%;
        text-align:center;
        .active-class{
            background-color: var(--primary-color  );
        }
        li{
            display:block;
            a{
                display:block;
                padding:.3rem 0;
                position:relative;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor:pointer;
                }
                &::before{
                    content:"";
                    position:absolute;
                    bottom:0;
                    left:0;
                    width:0;
                    height:50%;
                    background-color:var(--primary-color);
                    transition:All 0.4s cubic-bezier(1,-0.2,.25,.95);
                    z-index:-10;
                    opacity:0.21;
                }
            }
            a:hover::before{
                width:100%;
                height:100%;
            }
        }
    }

    footer{
        border-top : 1px solid var(--border-color);
        p{
            display:block;
            text-align:center;
            padding:2rem 0rem;
            font-size:1rem;
        }
    }
`;

export default Navigation;


