import React, { Component } from 'react';
import '../css/App.css';
import LogoWhite from './LogoWhite';
import styled from 'styled-components';
import TypeWriterText from './TypeWriterText';
import BackgroundImg from '../img/tw-consultant.svg';
import '../css/_variables.scss';
import '../css/hover.css';

const HeroSection = styled.section`
	background-size: contain;
	background: url(${BackgroundImg}) no-repeat center center;
	height: 100vh;
`;

const HeroOverlay = styled.div`
	content: '';
	position: fixed;
	overflow: scroll;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(200, 16, 46, 0.91);
`;

const HeroTitle = styled.h1`
	padding: 10px 0 0;
	text-align: center;
	font-size: 50px;
`;

const HeroContainer = styled.div`
	padding: 10px;
	height: 100vh;
	width: auto;
`;

const HeroContent = styled.div`
	z-index: 1;
	position: relative;
	color: #fff;
	width: 100%;
	text-align: center;
`;

class ThankYou extends Component {
	render() {
		return (
			<HeroSection className={'container'}>
				<HeroOverlay>
					<HeroContainer className={'row valign-wrapper'}>
						<HeroContent className={'col m12'}>
							<LogoWhite />
							<div>
								<HeroTitle>
									<TypeWriterText strings={'thank(you);'} speed={100} />
									<div id={'type-it'} />
								</HeroTitle>
							</div>
						</HeroContent>
					</HeroContainer>
				</HeroOverlay>
			</HeroSection>
		);
	}
}

export default ThankYou;
