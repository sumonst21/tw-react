import React, { Component } from 'react';
import Header from '../Header';
import PageTitle from '../PageTitle';
import ProjectCard from '../ProjectCard';
import OpenSrc from '../../img/tw-project-opensrc.jpg';
import WeatherApp from '../../img/tw-project-weather-app.jpg';
import TwitchApi from '../../img/tw-project-twitch-api.jpg';
import WikipediaApi from '../../img/tw-project-wikipedia-api.jpg';
import ChatBox from '../../img/tw-project-chatbox.jpg';
import StayTuned from '../../img/tw-project-placeholder.jpg';

class Projects extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className={'container'}>
					<div className="row">
						<PageTitle pageTitle={'Projects'} />
						<ProjectCard
							src={OpenSrc}
							alt={'OpenSrc.io'}
							href={'https://opensrc.io'}
							projectName={'OpenSrc.io'}
							languages={'React, HTML, CSS'}
						/>
						<ProjectCard
							src={WeatherApp}
							alt={'TW Weather App'}
							href={'https://tw-weather-app.netlify.com/'}
							projectName={'Local Weather API'}
							languages={'JS, HTML, CSS'}
						/>
						<ProjectCard
							src={TwitchApi}
							alt={'TW Twitch API'}
							href={'https://tw-twitch-api.netlify.com/'}
							projectName={'Twitch API'}
							languages={'JS, HTML, CSS'}
						/>
						<ProjectCard
							src={WikipediaApi}
							alt={'TW Wikipedia API'}
							href={'https://tw-wiki-viewer.netlify.com'}
							projectName={'Wikipedia API'}
							languages={'JS, HTML, CSS'}
						/>
						<ProjectCard
							src={ChatBox}
							alt={'TW ChatBox'}
							href={'https://tw-chatbox.netlify.com/'}
							projectName={'ChatBox.io'}
							languages={'JS, HTML, CSS'}
						/>
						<ProjectCard
							src={StayTuned}
							alt={'TW Stay Tuned'}
							href={'#'}
							projectName={'Stay Tuned For More!'}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
