import React, { Component } from 'react';
import Header from '../Header';
import PageTitle from '../PageTitle';
import Form from '../Form';
import '../../css/App.css';

class Contact extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className={'container'}>
					<PageTitle pageTitle={'Contact'} />
					<Form />
				</div>
			</div>
		);
	}
}

export default Contact;
