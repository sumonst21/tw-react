import React, { Component } from 'react';
import logo from '../img/tw-official-logo-white.svg';
import '../css/App.css';
import styled from 'styled-components';

const HeaderSection = styled.header`
    background-color: #c8102e;
	border-bottom: 3px solid #af0f19;
	height: 60px;
	color: #fff;
	box-shadow: 0 0 20px #252525;
	z-index: 9999;
	position: fixed;
	width: 100%;
	top: 0;
`;

const HeaderLogo = styled.img`
    height: 55px;
    padding: 5px 20px;
    opacity: 1.0;
    transition: opacity 0.5s ease-in-out;
    
    &:hover {
        opacity: 0.65;
    }
`;

const NavMenu = styled.ul`
    display: inline-block;
    float: right;
	margin-right: 50px;
	margin-top: 8px;
`;

const NavMenuItem = styled.li`
    padding: 5px 10px 5px 10px;
    display: inline-block;  
    
        &#contact-cta{
            background-color: #fff;
	        color: #c8102e;
	        border: 2px solid #fff;
	        border-bottom: 4px solid #eeeeee;
	        padding: 5px 20px;
	        margin-left: 10px;
	        border-radius: 4px;
            transition: background-color 0.5s ease-in-out;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        &#contact-cta:hover{
            border: 2px solid #fff;
            border-bottom: 3px solid #eee;
        }
`;




class Header extends Component {
  render() {
    return (
        <HeaderSection>
            <a href={'/'}>
                <HeaderLogo src={logo} alt='logo' />
            </a>
            <NavMenu>
                <a href="/about"><NavMenuItem>About</NavMenuItem></a>
                <a href="/projects"><NavMenuItem>Projects</NavMenuItem></a>
                <a href="/contact"><NavMenuItem id={'contact-cta'}>Let's Chat</NavMenuItem></a>
            </NavMenu>
        </HeaderSection>
    );
  }
}

export default Header;
