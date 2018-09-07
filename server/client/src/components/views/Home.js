import React, { Component } from 'react';
import '../../css/App.css';
import TransparentHeader from '../TransparentHeader';
import Hero from '../Hero';
import Header from '../Header';

class Home extends Component {
	render() {
		return (
			<div>
				<TransparentHeader />
				<div className={'container'}>
					<Hero />
				</div>
			</div>
		);
	}
}

export default Home;
