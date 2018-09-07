import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	text-align: center;
	font-size: 45px;
`;

class PageTitle extends Component {
	render() {
		return <Title>{this.props.pageTitle}</Title>;
	}
}

export default PageTitle;
