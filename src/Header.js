import React, { Component } from 'react';
import '../media/css/Header.css';
import { Col, Row, Thumbnail, Collapse, Carousel } from 'react-bootstrap';
class Header extends Component {
  // constructor(props){
  //   super(p)
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-anim"></div>
          <div className="App-anim2"></div>
          <div className="App-anim3"></div>
          <div className="divh1">
            <h1 className="App-h1">HI! I'M ARNAZ</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
