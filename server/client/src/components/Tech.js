import React, {Component} from 'react';
import styled from 'styled-components';


const Technology = styled.div`
  img {
    width: auto;
    height: 150px;
    display: block;
    margin: 0 auto;
  }
  
  // .card {
  //   width: 150px;
  //   height: 150px;
  //   margin: 0 auto;
  //   display: block;
  // }
  
`;


class Tech extends Component {
  render() {
    return(
      <Technology className="col md3">
        {/*<div className="card">*/}
          {/*<div className="card-content">*/}
            {/*<span className="card-title">{this.props.title}</span>*/}
            <img className={'col md3'} src={this.props.src}/>
          {/*</div>*/}
        {/*</div>*/}
      </Technology>
    )
  }
}

export default Tech;
