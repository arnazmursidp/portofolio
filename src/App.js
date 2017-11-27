import React, { Component } from 'react';
import logo from './logo.svg';
import '../media/css/App.css';
import { Col, Row } from 'react-bootstrap';


class App extends Component {
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
        <div className="App-introduce">
          <Row>
            <Col xs={3} md={3}>
              <div className="hiddens">
                
              </div>
            </Col>
            <Col xs={6} md={6}>
              <div className="desc">
                
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
