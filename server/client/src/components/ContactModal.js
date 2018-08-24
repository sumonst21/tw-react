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
	max-width: 600px;
	max-height: 500px;
	margin: auto;
	background: #fff;
	
	// Override default styling for Button.js component
	input[type=submit]{
		width: 100%;
		box-shadow: none !important;
	}
	
`;

const ClosePopupButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 5px 10px;
	background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 900;
`;

class ContactModal extends Component{
	render() {
		return (
			<PopupMat>
				<Popup className={'container'}>
          <ClosePopupButton onClick={this.props.closeModal}>X</ClosePopupButton>
					<h3 style={{textAlign: 'center'}}>{this.props.title}</h3>
					<Form/>
				</Popup>
			</PopupMat>
		)
	}
}

export default ContactModal;