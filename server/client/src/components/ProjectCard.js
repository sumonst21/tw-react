import React, { Component } from 'react';
// import styled from 'styled-components'
import 'material-icons';

class ProjectCard extends Component {
	render() {
		return (
			<div className="col m6">
				<div className="card hvr-float">
					<div className="card-image">
						<img src={this.props.src} alt={this.props.alt} />
						<a
							href={this.props.href}
							target={'_blank'}
							className="btn-floating halfway-fab waves-effect waves-light red"
						>
							<i className="material-icons">add</i>
						</a>
					</div>
					<div className="card-content">
						<p style={{ fontWeight: '900' }}>{this.props.projectName}</p>
						<p>{this.props.languages}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;
