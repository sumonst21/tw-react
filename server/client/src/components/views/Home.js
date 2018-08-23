import React, { Component } from 'react';
import '../../css/App.css';
import Hero from '../Hero'

class Home extends Component {
  render() {
    return (
      <div className={'container'}>
        <Hero/>
      </div>
    );
  }
}

export default Home;