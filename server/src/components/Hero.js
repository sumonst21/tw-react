import React, { Component } from 'react';
import '../css/App.css';
import LogoWhite from "./LogoWhite";
import Button from './Button'

class Hero extends Component {
    render() {
        return (
            <section className='hero'>
                    <div className="hero-container">
                        <div className="hero-text">
                            <LogoWhite/>
                            <h1 className={'hero-title'}>.developer();</h1>
                            <Button className={'btn-contact'} text={'Let\'s Work Together'}/>
                            <a href={'https://codesnippet.io'} style={{textDecoration: 'none', marginTop: '20px'}} target={'_blank'}>READ BLOG</a>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Hero;
