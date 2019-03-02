import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import PageTitle from '../PageTitle';
import Tech from '../Tech';
import HeadshotPic from '../../img/tw-headshot-round.png';
import RaceTrackPic from '../../img/tw-racetrack.jpg';
import SuperBowlPic from '../../img/tw-superbowl-li.jpg';
import CodeSnippet from '../../img/tw-codesnippet.svg';

import Angular from '../../img/tw-angular-opt.svg';
import AWS from '../../img/tw-aws-opt.svg';
import Bootstrap from '../../img/tw-bootstrap4-opt.svg';
import C from '../../img/tw-c-opt.svg';
import CSharp from '../../img/tw-csharp-opt.svg';
import CSS3 from '../../img/tw-css3-opt.svg';
import DigitalOcean from '../../img/tw-digitalocean-opt.svg';
import Express from '../../img/tw-express-opt.svg';
import Firebase from '../../img/tw-firebase-opt.svg';
import Git from '../../img/tw-git-opt.svg';
import Heroku from '../../img/tw-heroku-opt.svg';
import HTML5 from '../../img/tw-html5-opt.svg';
import Java from '../../img/tw-java-opt.svg';
import JavaScript from '../../img/tw-javascript-opt.svg';
import MongoDB from '../../img/tw-mongo-opt.svg';
import Netlify from '../../img/tw-netlify-opt.svg';
import NodeJS from '../../img/tw-nodejs-opt.svg';
import PHP from '../../img/tw-php-opt.svg';
import PostgreSQL from '../../img/tw-postgresql-opt.svg';
import Python from '../../img/tw-python-opt.svg';
import ReactLogo from '../../img/tw-react-opt.svg';
import Redux from '../../img/tw-redux-opt.svg';
import Solidity from '../../img/tw-solidity-opt.svg';
import TypeScript from '../../img/tw-typescript-opt.svg';

const Headshot = styled.img`
	width: 200px;
	height: auto;
	border-radius: 100px;
	display: block !important;
	// border: 4px solid #ccc;
	margin: 100px auto 0;
	box-shadow: 0px 8px 20px 0px #919191;
`;

const TechSection = styled.div`
	max-width: 725px;
	display: block;
	margin: 0 auto;
`;

const AboutMe = styled.div`
	p {
		font-size: 20px;
	}
	h6 {
		font-weight: 300;
		font-size: 30px;
		line-height: 1.5;
		margin-bottom: 50px;
	}
	.codeSnippet {
		background: #c8102e;
		padding: 5px 10px;
		width: auto;
		height: 40px;
		margin-top: 10px;
	}
	.aboutPics img {
		width: 100%;
		object-fit: contain;
	}
	.aboutPics img:last-child {
		margin-bottom: 50px;
	}
`;

class About extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col m8 offset-m2 center-align'}>
							<Headshot
								alt={'TW Headshot'}
								src={HeadshotPic}
								className={'hvr-float-shadow'}
							/>
							<PageTitle pageTitle={"Hey, I'm Tim."} />
							<AboutMe>
								<p>
									I'm a motivated lifelong learner that loves to build things{' '}
									<span role={'img'} aria-label={'Laptop Emoji'}>
										💻
									</span>
									. I was born and raised in Massachusetts, I'm a die-hard
									Patriots fan{' '}
									<span role={'img'} aria-label={'Football Emoji'}>
										🏈
									</span>{' '}
									and I love to race my car{' '}
									<span role={'img'} aria-label={'Racecar Emoji'}>
										🏎
									</span>
									. I'm also a very competitive person which is why I love
									coding so much{' '}
									<span role={'img'} aria-label={'Guy Emoji'}>
										👨
									</span>
									<span role={'img'} aria-label={'Laptop Emoji'}>
										‍💻
									</span>
									. It's the ultimate competition{' '}
									<span role={'img'} aria-label={'Boxing Emoji'}>
										🥊
									</span>{' '}
									and there's always something new to learn{' '}
									<span role={'img'} aria-label={'Nerd Emoji'}>
										🤓
									</span>
									.
								</p>
								<div style={{ marginBottom: '50px' }}>
									<h5>Check out my blog!</h5>
									<a href={'https://codesnippet.io'} target={'_blank'}>
										<img
											className={'codeSnippet hvr-float-shadow'}
											alt={'CodeSnippet Logo'}
											src={CodeSnippet}
										/>
									</a>
								</div>

								<div className="col m12 aboutPics">
									<img alt={'TW Race Track Pic'} src={RaceTrackPic} />
									<img alt={'TW Super Bowl Pic'} src={SuperBowlPic} />
								</div>

								<br />
								<h6>
									Here's a few of the technologies that I'm most familiar
									with...
								</h6>
							</AboutMe>
						</div>

						<TechSection>
							<Tech src={JavaScript} alt={'JavaScript Logo'} />
							<Tech src={NodeJS} alt={'Node.js Logo'} />
							<Tech src={ReactLogo} alt={'React Logo'} />
							<Tech src={Git} alt={'Git Logo'} />

							<Tech src={Java} alt={'Java Logo'} />
							<Tech src={CSharp} alt={'CSharp Logo'}/>
							<Tech src={Solidity} alt={'Solidity Logo'}/>
							<Tech src={Redux} alt={'Redux Logo'}/>

							<Tech src={Python} alt={'Python Logo'}/>
							<Tech src={PHP} alt={'PHP Logo'}/>
							<Tech src={PostgreSQL} alt={'PostgreSQL Logo'}/>
							<Tech src={TypeScript} alt={'TypeScript Logo'}/>

							<Tech src={Express} alt={'Express Logo'} />
							<Tech src={Firebase} alt={'Firebase Logo'} />
							<Tech src={MongoDB} alt={'MongoDB Logo'}/>
							<Tech src={C} alt={'C Logo'} />

							<Tech src={Angular} alt={'Angular Logo'} />
							<Tech src={HTML5} alt={'HTML5 Logo'} />
							<Tech src={CSS3} alt={'CSS3 Logo'} />
							<Tech src={Bootstrap} alt={'Bootstrap Logo'} />


							<Tech src={DigitalOcean} alt={'DigitalOcean Logo'} />
							<Tech src={Heroku} alt={'Heroku Logo'}/>
							<Tech src={AWS} alt={'AWS Logo'}/>
							<Tech src={Netlify} alt={'Netlify Logo'} />

						</TechSection>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
