import React, { Component } from 'react';
import '../css/App.css';
import LogoWhite from "./LogoWhite";
import Button from './Button'
import GitHub from '../img/tw-github.svg';
import LinkedIn from '../img/tw-linkedin.svg';

class Hero extends Component {
    render() {
        return (
          <section className='hero'>
            <div className="hero-overlay">
              <div className="hero-container">
                <div className="hero-text">
                  <LogoWhite/>
                  <div>
                    <h1 className={'hero-title'}>.developer();</h1>
                  </div>
                  <Button className={'btn-contact'} text={'Let\'s Work Together'} href={'/contact'}/>
                  <div className={'projects-link'}>
                    <a href={'/projects'} style={{textDecoration: 'none'}}>VIEW PROJECTS</a>
                  </div>
                  <div className={'blog-link'} >
                    <a href={'https://codesnippet.io'} style={{textDecoration: 'none'}} target={'_blank'}>READ BLOG</a>
                  </div>
                  <div>
                    <a href={'https://github.com/timwheelercom'} target={'_blank'}>
                      <img className={'homepage-logos'} src={GitHub} alt={'GitHub Logo'} />
                    </a>
                  </div>
                  <div>
                    <a href={'https://linkedin.com/in/timwheelercom'} target={'_blank'}>
                      <img className={'homepage-logos'} src={LinkedIn} alt={'LinkedIn Logo'} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Hero;
