import React, { Component } from 'react';
import '../css/App.css';
import LogoWhite from "./LogoWhite";
import Button from './Button'
import GitHub from '../img/tw-github.svg';
import LinkedIn from '../img/tw-linkedin.svg';
import CodeSnippet from '../img/tw-codesnippet.svg';
import Strtup from '../img/tw-strtup.svg';

class Hero extends Component {
    render() {
        return (
          <section className={'hero'}>
            <div className="hero-overlay" style={{position: "relative"}}>
              <div className={"hero-container"}>
                <div className={"hero-text"}>
                  <LogoWhite/>
                  <div>
                    <h1 className={'hero-title'}>.developer();</h1>
                  </div>
                  <Button className={'btn-contact hvr hvr-grow'} text={'Let\'s Work Together'} href={'/contact'}/>
                  <div className={'projects-link'}>
                    <a href={'/projects'} style={{textDecoration: 'none'}}>VIEW PROJECTS</a>
                  </div>
                  <div className={'blog-link'} >
                    <a href={'https://codesnippet.io'} style={{textDecoration: 'none'}} target={'_blank'}>READ BLOG</a>
                  </div>
                  <div>
                    <a href={'https://github.com/timwheelercom'} target={'_blank'}>
                      <img className={'homepage-logos hvr-float'} src={GitHub} alt={'GitHub Logo'} />
                    </a>
                    <a href={'https://linkedin.com/in/timwheelercom'} target={'_blank'}>
                      <img className={'homepage-logos hvr-float'} src={LinkedIn} alt={'LinkedIn Logo'} />
                    </a>
                  </div>
                  <div className={'creator-section'}>
	                  <h5>CREATOR OF:</h5>
	                  <div>
		                  <a href={'https://codesnippet.io'} target={'_blank'}>
			                  <img className={'homepage-logos'} src={CodeSnippet} alt={'CodeSnippet Logo'} />
		                  </a>
	                  </div>
	                  <div>
		                  <a href={'https://strtup.io'} target={'_blank'}>
			                  <img className={'homepage-logos'} src={Strtup} alt={'Strtup Logo'} />
		                  </a>
	                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Hero;
