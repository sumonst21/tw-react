import React, { Component } from 'react';
import '../css/App.css';



class Button extends Component {
    render() {
        return <button className={this.props.className}>{this.props.text}</button>
    }
}

export default Button;
