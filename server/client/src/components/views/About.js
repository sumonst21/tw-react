import React, {Component} from 'react';
import styled from 'styled-components';
// import M from 'materialize-css';
import Header from "../Header";
import PageTitle from '../PageTitle';
import HeadshotPic from '../../img/tw-headshot-round.png';
import RaceTrackPic from '../../img/tw-racetrack.jpg';
import SuperBowlPic from '../../img/tw-superbowl-li.jpg';
// import Parallax from 'materialize-css/js/parallax'
import Tech from '../Tech';
import JavaScript from '../../img/tw-javascript.svg';
import HTML5 from '../../img/tw-html-5.svg';
import CSS3 from '../../img/tw-css3.svg';
import NodeJS from '../../img/tw-nodejs.svg';
import ReactLogo from '../../img/tw-react.svg';
import MongoDB from '../../img/tw-mongodb.svg';
import Jquery from '../../img/tw-jquery.svg';

const Headshot = styled.img`
  width: 200px;
  height: auto;
  border-radius: 100px;
  display: block !important;
  border: 4px solid #ccc;
  margin: 100px auto 0;
`;

const ImgSection = styled.div`
  width: 100%;
  height: auto;
  position: inherit;
`;

const TechSection = styled.div`
  background: #eee;
`;


class About extends Component{

  render() {
    return (
      <div>
        <Header/>
        <ImgSection style={{backgroundImage: `url(${SuperBowlPic})`, height: '500px', backgroundAttachment: 'fixed'}}>.</ImgSection>
          <div className={'container'}>
              <div className={'row'}>

                <div className={'col m12'}>
                  <Headshot src={HeadshotPic} className={'hvr-float'}/>
                  <PageTitle pageTitle={'Hey, I\'m Tim.'}/>
                  <p className={'center-align'}>.</p>
                </div>


                <TechSection>
                  <Tech src={JavaScript}/>
                  <Tech src={ReactLogo}/>
                  <Tech src={NodeJS}/>
                  <Tech src={MongoDB}/>
                  <Tech src={HTML5}/>
                  <Tech src={CSS3}/>
                  <Tech src={Jquery}/>
                </TechSection>

              </div>
          </div>
      </div>
    )
  }
}

export default About;