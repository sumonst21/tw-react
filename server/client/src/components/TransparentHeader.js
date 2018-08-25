import React, { Component } from 'react';
import logo from '../img/tw-official-logo-white.svg';
import '../css/App.css';
import styled from 'styled-components';
import ContactModal from './ContactModal';

const TransparentHeaderSection = styled.header`
  background-color: transparent;
	height: 60px;
	color: #fff;
	z-index: 9999;
	position: sticky;
	width: 100%;
	top: 0;
	
	h3{
	  color: #333;
	}
	
	.closeButton{
	  color: #333;
	}
	
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
            background-color: #c8102e;
	          color: #fff;
	          padding: 5px 20px;
            transition: opacity 0.3s ease-in-out;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        &#contact-cta:hover{
            opacity: 0.85;
        }
        
        @media (min-width: 501px) {
          &#contact-cta{
            background-color: #fff;
            color: #c8102e;          
          }
        }
        
        
`;

const MobileNavMenu = styled.ul`
  
  background: #fff;
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
          background-color: #c8102e;
	        color: #fff;
	        padding: 5px 20px;
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
  cursor: pointer;
  display: none !important;
  line-height: 1.9 !important;
  font-size: 30px !important;
  padding-right: 20px;
  
  @media (max-width: 500px) {
	    display: block !important;
	    
	}
`;


class TransparentHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMobileMenu: false,
      showModal: false
    }
  }
  toggleMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    return (
        <TransparentHeaderSection>
            <a href={'/'}>
                <HeaderLogo src={logo} alt='logo' />
            </a>
            <NavMenu>
                <a href="/about"><NavMenuItem>About</NavMenuItem></a>
                <a href="/projects"><NavMenuItem>Projects</NavMenuItem></a>
                <a onClick={this.toggleModal.bind(this)}><NavMenuItem id={'contact-cta'}>Let's Chat</NavMenuItem></a>
            </NavMenu>
            <MobileNavMenuToggle onClick={this.toggleMobileMenu.bind(this)} className={'material-icons'}>menu</MobileNavMenuToggle>
          {/* MOBILE MENU */}
          {this.state.showMobileMenu ?
            <MobileNavMenu>
              <a href="/about"><MobileNavMenuItem>About</MobileNavMenuItem></a>
              <a href="/projects"><MobileNavMenuItem>Projects</MobileNavMenuItem></a>
              <a onClick={this.toggleModal.bind(this)}><NavMenuItem id={'contact-cta'}>Let's Chat</NavMenuItem></a>
            </MobileNavMenu>
            :null
          }
          {/* CONTACT MODAL*/}
          {this.state.showModal ?
            <ContactModal
              title={'Reach Out'}
              closeModal={this.toggleModal.bind(this)}
            />
            :null
          }
        </TransparentHeaderSection>
    );
  }
}

export default TransparentHeader;
