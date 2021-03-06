import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/App.css';
import './css/_variables.scss';
import Home from './components/views/Home';
import About from './components/views/About';
import Projects from './components/views/Projects';
import Thanks from './components/views/Thanks';
// import Contact from './components/views/Contact';

// import Header from './components/Header'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/about'} component={About} />
					<Route exact path={'/projects'} component={Projects} />
					<Route exact path={'/thank-you'} component={Thanks} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
