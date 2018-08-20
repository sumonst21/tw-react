import React, {Component} from 'react';
import '../css/App.css'
// import '../css/_variables.scss'

class Form extends Component {
	render() {
		function handleClick(e) {
			e.preventDefault();
			console.log(document.getElementById('emailInput').value);
		}

		return (
			<form onClick={handleClick}>
				<input id={'emailInput'} type={'text'} placeholder={'Email'}/>
				<input type={'submit'} className={'btn-contact-red'} placeholder={'Get Started'}/>
			</form>
		)
	}
}
export default Form;