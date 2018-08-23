import React, { Component } from 'react';
import '../css/App.css';
import LogoWhite from "./LogoWhite";
import Button from './Button';
import styled from 'styled-components';
// import TypeIt from 'typeit';
import TypeWriterText from './TypeWriterText';
import GitHub from '../img/tw-github.svg';
import LinkedIn from '../img/tw-linkedin.svg';
import CodeSnippet from '../img/tw-codesnippet.svg';
import Strtup from '../img/tw-strtup.svg';
import BackgroundImg from '../img/tw-consultant.svg';
import '../css/_variables.scss';
import '../css/hover.css';


const HeroSection = styled.section`
	background-size: contain;
	background: url(${BackgroundImg}) no-repeat center center;
	height: 100vh;
`;

const HeroOverlay = styled.div`
	content: "";
	position: fixed;
	overflow: scroll;
	left: 0; right: 0;
	top: 0; bottom: 0;
	background: rgba(200, 16, 46, 0.91);
`;

const HeroTitle = styled.h1`
	padding: 20px 50px 0;
	text-align: center;
	font-size: 50px;
`;
const HomepageLogo = styled.img`
	height: 35px;
	width: auto;
	padding: 0 10px;
`;

const HeroContainer = styled.div`
	padding: 10px;
	height: 100vh;
	width: auto;
`;

const HeroText = styled.div`
	z-index: 1;
	position: relative;
	color: #fff;
	width: 100%;
	text-align: center;
`;

const CreatorSection = styled.div`
	margin-top: 25px;
	h5{
		font-size: 16px;
	}
`;

const Links = styled.div`
    font-size: 18px;
    letter-spacing: 1px;
    margin: 10px 0;
`;

class Hero extends Component {
    render() {
        return (
          <HeroSection>
            <HeroOverlay>
              <HeroContainer>
                <HeroText>
                  <LogoWhite/>
                  <div>
	                  <HeroTitle>
		                  <TypeWriterText
			                  strings={['developer();']}
			                  speed={100}
	                  		/>
		                  <div id={'type-it'}/>
	                  </HeroTitle>
                  </div>
                  <Button className={'btn-contact hvr-float'} text={'Let\'s Work Together'} href={'/contact'}/>
                  <Links>
                    <a href={'/projects'} style={{textDecoration: 'none'}}>VIEW PROJECTS</a>
                  </Links>
                  <Links>
                    <a href={'https://codesnippet.io'} style={{textDecoration: 'none'}} target={'_blank'}>READ BLOG</a>
                  </Links>
                  <div>
                    <a href={'https://github.com/timwheelercom'} target={'_blank'}>
                      <HomepageLogo className={'hvr-float'} src={GitHub} alt={'GitHub Logo'} />
                    </a>
                    <a href={'https://linkedin.com/in/timwheelercom'} target={'_blank'}>
                      <HomepageLogo className={'hvr-float'} src={LinkedIn} alt={'LinkedIn Logo'} />
                    </a>
                  </div>
                  <CreatorSection>
	                  <h5>CREATOR OF:</h5>
	                  <div>
		                  <a href={'https://codesnippet.io'} target={'_blank'}>
			                  <HomepageLogo src={CodeSnippet} alt={'CodeSnippet Logo'} />
		                  </a>
	                  </div>
	                  <div>
		                  <a href={'https://strtup.io'} target={'_blank'}>
			                  <HomepageLogo src={Strtup} alt={'Strtup Logo'} />
		                  </a>
	                  </div>
                  </CreatorSection>
                </HeroText>
              </HeroContainer>
            </HeroOverlay>
          </HeroSection>
        );
    }
}



export default Hero;
