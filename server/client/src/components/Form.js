import React, {Component} from 'react';
import '../css/App.css'
import styled from "styled-components";
import '../css/hover.css'
// import '../css/_variables.scss'

const Btn = styled.input`
    font-size: 20px;
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
	max-width: 500px;
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
					// console.log(document.getElementById('firstNameInput').value);
					// console.log(document.getElementById('lastNameInput').value);
					// console.log(document.getElementById('emailInput').value);
					// console.log(document.getElementById('phoneInput').value);
					// console.log(document.getElementById('messageInput').value);
				}
			}

		}

		return (
			<ContactForm onSubmit={handleSubmit}>
				<input id={'firstNameInput'} type={'text'} style={{width: '49%', marginRight: '1%'}} placeholder={'First Name'}/>
				<input id={'lastNameInput'} type={'text'} style={{width: '50%'}} placeholder={'Last Name'}/>
				<input id={'emailInput'} type={'text'} placeholder={'Email'}/>
				<input id={'phoneInput'} type={'text'} placeholder={'Phone'}/>
				<input id={'messageInput'} type={'text'} placeholder={'Message'}/>
				<Btn type={'submit'} className={'hvr-float'} placeholder={'Get Started'}/>
			</ContactForm>
		)
	}
}
export default Form;