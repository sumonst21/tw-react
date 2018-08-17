import React, { Component } from 'react';
import '../css/App.css';
import LogoWhite from "./LogoWhite";
import Button from './Button'
// import TypewriterHeroText from './TypewriterHeroText'

class Hero extends Component {
    render() {
        return (
            <section className='hero'>
                    <div className="hero-container">
                        <div className="hero-text">
                            {/*<TypewriterHeroText/>*/}
                            <LogoWhite/>
                            <h1>.developer();</h1>
                            <Button className={'btn-contact'} text={'Let\'s Work Together'}/>
                            <a href={'https://codesnippet.io'} style={{textDecoration: 'none'}} target={'_blank'}>READ BLOG</a>
                            {/*<Button className={'btn-blog'} text={'Read Blog'}/>*/}
                        {/*<div className="hero-left">*/}
                            {/*<p>Hero Left</p>*/}
                        {/*</div>*/}
                        {/*<div className="hero-right">*/}
                            {/*<p>Hero Right</p>*/}
                        {/*</div>*/}
                        </div>
                    </div>
            </section>
        );
    }
}

export default Hero;
