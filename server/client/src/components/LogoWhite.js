import React, { Component } from 'react';
import '../css/App.css';
import logo from '../img/tw-official-logo-white.svg'
import styled from 'styled-components';

const Logo = styled.img`
    height: 200px;
    width: auto;
    margin-bottom: -65px;
    padding: 20px;
    opacity: 1.0;
    transition: opacity 0.5s ease-in-out;
`;

class LogoWhite extends Component {
    render() {
        return <Logo src={logo} className={'hero-logo'} alt="TW Logo White"/>
    }
}
export default LogoWhite;

