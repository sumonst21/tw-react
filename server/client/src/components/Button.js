import React, { Component } from 'react';
import '../css/App.css';
import styled from 'styled-components';

const Btn = styled.button`
	font-size: 20px;
	height: 50px;
	width: fit-content;
	padding: 0 33px;
	background-color: #f5f5f5;
	color: #c8102e;
	outline: none;
	display: block;
	margin: 25px auto;
	box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.5) !important;
	text-transform: uppercase;
	border: none;
	letter-spacing: 2px;
	font-family: 'Inconsolata', monospace;

	&:focus {
		outline: none;
		background-color: #fff;
	}
`;

class Button extends Component {
	render() {
		return (
			<a onClick={this.props.onClick} href={this.props.href}>
				<Btn type={this.props.type} className={this.props.className}>
					{this.props.text}
				</Btn>
			</a>
		);
	}
}

export default Button;
