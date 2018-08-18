import React, { Component } from 'react';
import '../css/App.css';
import logo from '../img/tw-official-logo-white.svg'

class LogoWhite extends Component {
    render() {
        return <img src={logo} className={'hero-logo'} alt="TW Logo White"/>
    }
}
export default LogoWhite;

