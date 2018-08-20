import React, { Component } from 'react';
import '../css/App.css';



class Button extends Component {
    render() {
      return <a href={this.props.href}><button type={this.props.type} className={this.props.className}>{this.props.text}</button></a>
    }
}

export default Button;