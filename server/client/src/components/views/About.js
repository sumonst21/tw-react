import React, {Component} from 'react';
import styled from 'styled-components';
import Header from "../Header";
import PageTitle from '../PageTitle';

class About extends Component{
  render() {
    return (
      <div>
        <Header/>
          <div className={'container'}>
            <PageTitle pageTitle={'About'}/>
          </div>
      </div>
    )
  }
}

export default About;