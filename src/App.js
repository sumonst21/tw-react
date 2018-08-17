import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header'
import Hero from './components/Hero'

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Hero/>
      </div>
    );
  }
}

export default App;
