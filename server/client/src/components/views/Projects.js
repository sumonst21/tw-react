import React, { Component } from 'react';
import Header from '../Header';
import PageTitle from '../PageTitle';
import ProjectCard from '../ProjectCard';
import WeatherApp from '../../img/tw-project-weather-app.jpg';
import TwitchApi from '../../img/tw-project-twitch-api.jpg';
import WikipediaApi from '../../img/tw-project-wikipedia-api.jpg';
import ChatBox from '../../img/tw-project-chatbox.jpg';

class Projects extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className={'container'}>
					<div className="row">
						<PageTitle pageTitle={'Projects'} />
						<ProjectCard
							src={WeatherApp}
							alt={'TW Weather App'}
							href={'https://timwheeler.com/dev/weather-app'}
							projectName={'Local Weather API'}
							languages={'JS, HTML, CSS'}
						/>
						<ProjectCard
							src={TwitchApi}
							alt={'TW Twitch API'}
							href={'https://timwheeler.com/dev/twitch-api'}
							projectName={'Twitch API'}
							languages={'JS, HTML, CSS'}
						/>
						<ProjectCard
							src={WikipediaApi}
							alt={'TW Wikipedia API'}
							href={'https://timwheeler.com/dev/wiki-viewer'}
							projectName={'Wikipedia API'}
							languages={'JS, HTML, CSS'}
						/>
						<ProjectCard
							src={ChatBox}
							alt={'TW ChatBox'}
							href={'https://timwheeler.com/dev/chatbox'}
							projectName={'ChatBox.io'}
							languages={'JS, HTML, CSS'}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
