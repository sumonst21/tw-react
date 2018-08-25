import React, {Component} from 'react';
import '../css/App.css'
import '../css/_variables.scss';
import styled from "styled-components";
import '../css/hover.css'
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
    box-shadow: 0 0 35px 0 rgba(0,0,0,0.5) !important;
    text-transform: uppercase;
    border: none;
    letter-spacing: 2px;

    &:focus {
        outline: none;
    }
`;

const ContactForm = styled.form`
	font-family: 'Inconsolata', monospace !important;
	max-width: 500px;
	display: block;
	margin: 0 auto;
	
	input[type=text]{
		font-size: 20px;
		
	}
	
	input[type=text]:focus{
		border-bottom: 2px solid #c8102e !important;
    -webkit-box-shadow: 0 2px 0 0 #c8102e !important;
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
	render() {
		function handleSubmit(e) {
			e.preventDefault();

			const inputs = document.querySelectorAll('input');

			for (var i in inputs) {
				if (inputs[i] === '') {
					console.log('Please complete the form');
				} else {
					console.log(inputs[i].value);
				}
			}

		}

		return (
			<ContactForm onSubmit={handleSubmit}>
					<div className={'row'} style={{margin: '50px 50px 0'}}>
					<input id={'firstNameInput'} type={'text'} className={'col s12 m6'} placeholder={'First Name'} autoComplete={'off'}/>
					<input id={'lastNameInput'} type={'text'} className={'col s12 m6'} placeholder={'Last Name'} autoComplete={'off'}/>
					<input id={'emailInput'} type={'text'} placeholder={'Email'} autoComplete={'off'}/>
					<input id={'phoneInput'} type={'text'} placeholder={'Phone'} autoComplete={'off'}/>
					<input id={'messageInput'} type={'text'} placeholder={'Message'} autoComplete={'off'}/>
					<Btn type={'submit'} style={{width: '100%'}} className={'hvr-float'} placeholder={'Get Started'}/>
					<FormLogo src={LogoDark}/>
				</div>
			</ContactForm>
		)
	}
}
export default Form;