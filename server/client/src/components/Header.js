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
	position: sticky;
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
	
	@media (max-width: 500px) {
	    display: none;
	}
	
`;

const NavMenuItem = styled.li`
    padding: 5px 10px 5px 10px;
    display: inline-block;
    font-size: 18px;
    
        &#contact-cta{
            background-color: #fff;
	        color: #c8102e;
	        padding: 5px 20px;
	        margin-left: 10px;
	        // border-radius: 4px;
            transition: opacity 0.3s ease-in-out;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        &#contact-cta:hover{
            opacity: 0.85;
            // border: 2px solid #fff;
            // border-bottom: 3px solid #eee;
        }
`;

const MobileNavMenu = styled.ul`
  
  background: #c8102e;
  opacity: 0.95
  color: #333;
  margin-top: -1px;
  padding: 20px !important;
  text-align: center;

`;

const MobileNavMenuItem = styled.ul`
  
    padding: 5px 10px 5px 10px;
    display: block;
    font-size: 18px;
    
        &#contact-cta{
          background-color: #fff;
	        color: #333;
	        padding: 5px 20px;
	        margin-left: 10px;
          transition: opacity 0.3s ease-in-out;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        &#contact-cta:hover{
            opacity: 0.85;
        }
`;

const MobileNavMenuToggle = styled.i`
  float: right;
  display: none !important;
  line-height: 1.9 !important;
  font-size: 30px !important;
  padding-right: 20px;
  
  @media (max-width: 500px) {
	    display: block !important;
	    
	}
`;


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMobileMenu: false
    }
  }
  toggleMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }
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
            <MobileNavMenuToggle onClick={this.toggleMobileMenu.bind(this)} className={'material-icons'}>menu</MobileNavMenuToggle>
          {this.state.showMobileMenu ?
            <MobileNavMenu>
              <a href="/about"><MobileNavMenuItem>About</MobileNavMenuItem></a>
              <a href="/projects"><MobileNavMenuItem>Projects</MobileNavMenuItem></a>
              <a href="/contact"><MobileNavMenuItem id={'contact-cta'}>Let's Chat</MobileNavMenuItem></a>
            </MobileNavMenu>
            :null
          }
        </HeaderSection>
    );
  }
}

export default Header;
