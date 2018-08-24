import React, {Component} from 'react';
import styled from 'styled-components';
import Form from './Form';

const PopupMat = styled.div`
	position: fixed;
	width: 100%
	height: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
	background: rgba(0,0,0,0.33);
`;

const Popup = styled.div`
	position: absolute;
	top: 20%;
	right: 20%;
	bottom: 20%;
	left: 20%;
	margin: auto;
	background: #fff;
`;

class ContactModal extends Component{
	render() {
		return (
			<PopupMat>
				<Popup className={'container'}>
					<h3 style={{textAlign: 'center'}}>{this.props.title}</h3>
					<Form/>
					<button onClick={this.props.closeModal}>X</button>
				</Popup>
			</PopupMat>
		)
	}
}

export default ContactModal;