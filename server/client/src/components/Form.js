import React, { Component } from 'react';
import '../css/App.css';
import '../css/_variables.scss';
import styled from 'styled-components';
import '../css/hover.css';
import LogoDark from '../img/tw-official-logo.svg';

const Btn = styled.input`
	font-size: 20px;
	font-family: 'Inconsolata', monospace !important;
	height: 50px;
	width: fit-content;
	padding: 0 33px;
	background-color: #c8102e;
	color: #f5f5f5;
	outline: none;
	display: block !important;
	margin: 25px auto;
	box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.5) !important;
	text-transform: uppercase;
	border: none;
	letter-spacing: 2px;

	&:focus {
		outline: none;
	}
`;

const ContactForm = styled.form`
	max-width: 500px;
	display: block;
	margin: 0 auto;
	
	select,
	input[type='text'],
	input[type='email'],
	input[type='tel'] {
		font-size: 20px;
		font-family: 'Inconsolata', monospace;
	}
	
	select:focus,
	input[type='text']:focus,
	input[type='email']:focus,
	input[type='tel']:focus {
		border-bottom: 1px solid #c8102e !important;
		-webkit-box-shadow: 0 1px 0 0 #c8102e !important;
		box-shadow: 0 2px 0 0 #c8102e !important;
	}
`;

const FormLogo = styled.img`
	width: 50px;
	height: auto;
	display: block;
	margin: 0 auto;
`;

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
	}

  static handleSubmit(e) {
    // e.preventDefault();
    const inputs = document.querySelectorAll('input');
    for (let i in inputs) {
      if (inputs[i] === '') {
        console.log('Please complete the form');
      } else {
        console.log(inputs[i].value);
      }
    }
  }

  handleChange(e){
		this.setState({ value: e.target.value });
  }

  static getTimeStamp() {
    const timeStamp = new Date();
    const date = timeStamp.toLocaleDateString();
    const time = timeStamp.toLocaleTimeString();

    return date + ' ' + time;
  }

	render() {
		return (
			<ContactForm
				method={'POST'}
				action={'/thank-you'}
				onSubmit={Form.handleSubmit}
				name={'contact'}
				data-netlify={'true'}
			>
				<div className={'row'} style={{ margin: '50px 50px 0' }}>
					<input type={'hidden'} name={'form-name'} value={'contact'} />
					<input
						id={'firstNameInput'}
						name={'firstName'}
						type={'text'}
						className={'col s12 m6'}
						placeholder={'First Name'}
						autoComplete={'off'}
					/>
					<input
						id={'lastNameInput'}
						name={'lastName'}
						type={'text'}
						className={'col s12 m6'}
						placeholder={'Last Name'}
						autoComplete={'off'}
					/>
					<input
						id={'emailInput'}
						name={'email'}
						type={'email'}
						placeholder={'Email'}
						autoComplete={'off'}
					/>
					<input
						id={'phoneInput'}
						name={'phone'}
						type={'tel'}
						placeholder={'Phone'}
						autoComplete={'off'}
					/>

					<select value={this.state.value} id={'service'} name={'service'} onChange={this.handleChange}>
            <option value="" disabled defaultValue={""}>Service Needed</option>
						<option value={"Software Development"}>Software Development</option>
						<option value={"Consulting"}>Consulting</option>
						<option value={"Skills Training"}>Skills Training</option>
						<option value={"Public Speaking"}>Public Speaking</option>
            <option value={"Other"}>Other</option>
					</select>

					<input
						id={'messageInput'}
						name={'message'}
						type={'text'}
						placeholder={'Message'}
						autoComplete={'off'}
					/>
					<input
						id={'timeStamp'}
						name={'timeStamp'}
						type={'hidden'}
						value={Form.getTimeStamp()}
					/>
					<Btn
						type={'submit'}
						style={{ width: '100%' }}
						className={'hvr-float'}
						placeholder={'Get Started'}
					/>
					<FormLogo src={LogoDark} />
				</div>
			</ContactForm>
		);
	}
}
export default Form;
