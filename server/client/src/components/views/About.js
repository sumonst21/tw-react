import React, {Component} from 'react';
import styled from 'styled-components';
// import M from 'materialize-css';
// import Button from '../Button';
// import ContactModal from '../ContactModal';
import Header from "../Header";
import PageTitle from '../PageTitle';
import Tech from '../Tech';
import HeadshotPic from '../../img/tw-headshot-round.png';
import RaceTrackPic from '../../img/tw-racetrack.jpg';
import SuperBowlPic from '../../img/tw-superbowl-li.jpg';
import Babel from '../../img/tw-babel-opt.svg';
import Bootstrap from '../../img/tw-bootstrap4-opt.svg';
import C from '../../img/tw-c-opt.svg';
import CodeSnippet from '../../img/tw-codesnippet.svg';
// import CPlusPlus from '../../img/tw-cplusplus-opt.svg';
import CSS3 from '../../img/tw-css3-opt.svg';
import DigitalOcean from '../../img/tw-digitalocean-opt.svg';
import Dotnet from '../../img/tw-dotnet-opt.svg';
import Express from '../../img/tw-express-opt.svg';
import Firebase from '../../img/tw-firebase-opt.svg';
import Github from '../../img/tw-github-opt.svg';
import GoogleAds from '../../img/tw-googleads-opt.svg';
import GoogleAnalytics from '../../img/tw-googleanalytics-opt.svg';
import HTML5 from '../../img/tw-html5-opt.svg';
import Illustrator from '../../img/tw-illustrator-opt.svg';
import JavaScript from '../../img/tw-javascript-opt.svg';
// import Jquery from '../../img/tw-jquery.svg';
import MongoDB from '../../img/tw-mongo-opt.svg';
import Netlify from '../../img/tw-netlify-opt.svg';
import NodeJS from '../../img/tw-nodejs-opt.svg';
import Photoshop from '../../img/tw-photoshop-opt.svg';
import ReactLogo from '../../img/tw-react-opt.svg';
import XD from '../../img/tw-xd-opt.svg';

const Headshot = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100px;
  display: block !important;
  // border: 4px solid #ccc;
  margin: 100px auto 0;
  box-shadow: 0px 8px 20px 0px #919191;
`;

// const ImgSection = styled.div`
// 	  width: 50%;
// 	  height: auto;
// 	  position: inherit;
// 	  background-attachment: fixed;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center left;
//
// `;

const TechSection = styled.div`
  max-width: 725px;
  display: block;
  margin: 0 auto;
`;

const AboutMe = styled.div`
	
	p{
		font-size: 20px;
	}
	h6{
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
	.aboutPics img{
		width: 100%;
		object-fit: contain;
	}
	.aboutPics img:last-child{
		margin-bottom: 50px;
	}
`;


class About extends Component{
  render() {
    return (
      <div>
        <Header/>
	      <div className={'container'}>
              <div className={'row'}>
                <div className={'col m8 offset-m2 center-align'}>
                  <Headshot alt={'TW Headshot'} src={HeadshotPic} className={'hvr-float-shadow'}/>
                  <PageTitle pageTitle={'Hey, I\'m Tim.'}/>
	                <AboutMe>
		                <p>I'm a motivated lifelong learner that loves to build things <span role={'img'} aria-label={'Laptop Emoji'} >💻</span>. I was born and raised in Massachusetts, I'm a die-hard Patriots fan <span role={'img'} aria-label={'Football Emoji'} >🏈</span> and I love to race my car <span role={'img'} aria-label={'Racecar Emoji'}>🏎</span>.
			                I'm also a very competitive person which is why I love coding so much <span role={'img'} aria-label={'Guy Emoji'} >👨</span><span role={'img'} aria-label={'Laptop Emoji'}>‍💻</span>. It's the ultimate competition <span role={'img'} aria-label={'Boxing Emoji'}>🥊</span> and there's always something new to learn <span role={'img'} aria-label={'Nerd Emoji'}>🤓</span>.</p>
		                <div style={{marginBottom: '50px'}}>
			                <h5>Check out my blog!</h5>
			                <a href={'https://codesnippet.io'} target={'_blank'}>
				                <img className={'codeSnippet hvr-float-shadow'} alt={'CodeSnippet Logo'} src={CodeSnippet}/>
			                </a>
		                </div>

		                <div className="col m12 aboutPics">
			                <img alt={'TW Race Track Pic'} src={RaceTrackPic}/>
			                <img alt={'TW Super Bowl Pic'} src={SuperBowlPic}/>
		                </div>

	                    <br/>
		                <h6>Here's a few of the technologies that I'm most familiar with...</h6>
	                </AboutMe>
                </div>

                <TechSection>
                    <Tech src={JavaScript} alt={'JavaScript Logo'}/>
                    <Tech src={NodeJS} alt={'Node.js Logo'}/>
                    <Tech src={ReactLogo} alt={'React Logo'}/>

                    <Tech src={Github} alt={'Github Logo'}/>
                    <Tech src={HTML5} alt={'HTML5 Logo'}/>
                    <Tech src={CSS3} alt={'CSS3 Logo'}/>
	                <Tech src={Bootstrap} alt={'Bootstrap Logo'}/>

	                <Tech src={Express} alt={'Express Logo'}/>
                    <Tech src={Babel} alt={'Babel Logo'}/>

	                <Tech src={C} alt={'C Logo'}/>
	                <Tech src={Dotnet} alt={'Dotnet Logo'}/>

                    <Tech src={Firebase} alt={'Firebase Logo'}/>
                    <Tech src={MongoDB} alt={'MongoDB Logo'}/>


	                <Tech src={DigitalOcean} alt={'DigitalOcean Logo'}/>
                    <Tech src={Netlify} alt={'Netlify Logo'}/>

	                <Tech src={GoogleAnalytics} alt={'Google Analytics Logo'}/>
	                <Tech src={GoogleAds} alt={'Google Ads Logo'}/>

	                <Tech src={Photoshop} alt={'Photoshop Logo'}/>
	                <Tech src={Illustrator} alt={'Illustrator Logo'}/>
	                <Tech src={XD} alt={'XD Logo'}/>

                </TechSection>



              </div>
          </div>
      </div>
    )
  }
}

export default About;