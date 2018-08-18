import React, { Component } from 'react';
import TypeIt from 'typeit';
import '../css/App.css';

class TypewriterHeroText extends Component {
  render() {
      const heroText = new TypeIt('.type-it', {
          strings: ['Enter your string here!', 'Another string!'],
          breakLines: false
      });
    return (
      <p className={'type-it'} >
          {heroText.strings}
      </p>
    );
  }
}

export default TypewriterHeroText;
