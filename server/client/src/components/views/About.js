import React, {Component} from 'react';
import Header from "../Header";

class About extends Component{
  render() {
    return (
      <div>
        <Header/>
          <div className={'container'}>
            <h1>About</h1>
          </div>
      </div>
    )
  }
}

export default About;