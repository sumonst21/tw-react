import React, { Component } from 'react';
import TypeIt from 'typeit';

class TypeWriterText extends Component {
	constructor (props) {
		super(props);
	}
	componentDidMount () {
		new TypeIt(this.el, this.props);
	}
	render(){
		return <span ref={(el) => { this.el = el; }}>{this.props.strings}</span>;
	}
}

export default TypeWriterText;
