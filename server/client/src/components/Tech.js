import React, {Component} from 'react';
import styled from 'styled-components';


const Technology = styled.div`
  img {
    width: auto;
    height: 150px;
    display: block;
  } 
`;


class Tech extends Component {
  render() {
    return(
      <Technology className="col m3 hvr-float">
            <img className={'card'} src={this.props.src}/>
      </Technology>
    )
  }
}

export default Tech;
