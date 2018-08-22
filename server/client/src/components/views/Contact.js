import React, {Component} from 'react';
import Header from "../Header";
import Form from '../Form';
import '../../css/App.css'

class Contact extends Component {
  render () {
    return (
        <div>
            <Header/>
            <div className={'container'}>
              <h1>Contact</h1>
                <Form/>
            </div>
        </div>
      )
  }
}

export default Contact;