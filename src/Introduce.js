import React, { Component } from 'react';
import '../media/css/App.css';
import me from '../media/images/me.jpg'
import { Col, Row, Thumbnail, Collapse, Carousel } from 'react-bootstrap';


class Introduce extends Component {
  // constructor(props){
  //   super(p)
  // }
  render() {
    return (
        <div className="App-introduce">
          <Thumbnail src={me} href="#" />
        </div>
    );
  }
}

export default Introduce;
