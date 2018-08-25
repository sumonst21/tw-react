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
	max-height: 650px;
	margin: auto;
	background: #fff;
	border: double 10px #3333330f;
	box-sizing: border-box;
	
	// Override default styling for Button.js component
	input[type=submit]{
		width: 100%;
		box-shadow: none !important;
		aut
	}
	
	@media (max-width:500px) {
		top: 5%;
		right: 5%;
		bottom: 5%;
		left: 5%;
		overflow: scroll;
		
	}
	
	@media (min-width: 501px) and (max-width:650px) {
			bottom: 15%;
	}
	
`;

const ClosePopupButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	padding: 0 10px;
	background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 900;
  
  &:focus{
  	background-color: #c8102e;
  	color: #fff;
  }
  
`;

class ContactModal extends Component{
	render() {
		return (
			<PopupMat>
				<Popup className={'col m12'}>
          <ClosePopupButton className={'closeButton'} onClick={this.props.closeModal}>X</ClosePopupButton>
					<h3 style={{textAlign: 'center'}}>{this.props.title}</h3>
					<Form/>
				</Popup>
			</PopupMat>
		)
	}
}

export default ContactModal;