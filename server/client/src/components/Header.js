import React, { Component } from 'react';
import logo from '../img/tw-official-logo-white.svg';
import '../css/App.css';

class Header extends Component {
  render() {
    return (
        <header className='header'>
            <a href={'/'}>
                <img src={logo} className='header-logo' alt='logo' />
            </a>
            <ul className={'nav-menu'}>
                <a href="/about"><li className={'nav-menu-item'}>About</li></a>
                <a href="/projects"><li className={'nav-menu-item'}>Projects</li></a>
                <a href="/contact"><li id={'contact-cta'} className={'nav-menu-item'}>Let's Chat</li></a>
            </ul>
        </header>
    );
  }
}

export default Header;
