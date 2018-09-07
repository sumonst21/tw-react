import React, { Component } from 'react';
import '../../css/App.css';
import TransparentHeader from '../TransparentHeader';
import ThankYou from '../ThankYou';

class Thanks extends Component {
	render() {
		return (
			<div>
				<TransparentHeader />
				<div className={'container'}>
					<ThankYou />
				</div>
			</div>
		);
	}
}

export default Thanks;
