import React, { Component } from 'react';
import logo from '../img/tw-logo-white.svg';
import '../css/App.css';

class Header extends Component {
  render() {
    return (
        <header className='header'>
            <a href={'https://timwheeler.com'} target={'_blank'}>
                <img src={logo} className='header-logo' alt='logo' />
            </a>
            <ul className={'nav-menu'}>
                <a href="/"><li className={'nav-menu-item'}>About</li></a>
                <a href="/"><li className={'nav-menu-item'}>Projects</li></a>
                <a href="/"><li id={'contact-cta'} className={'nav-menu-item'}>Let's Chat</li></a>
            </ul>
        </header>
    );
  }
}

export default Header;
