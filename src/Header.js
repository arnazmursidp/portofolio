import React, { Component } from 'react';
import '../media/css/Header.css';
class Header extends Component {
  // constructor(props){
  //   super(p)
  // }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="divh1">
            <h1 className="App-h1">Arnaz Mursid Prakasa</h1>
            <div className="div-line"></div>
            <h3>I'm based on Bandung, East Java, Indonesia, 
              and I do front end web development using reactjs and mobile using React Native
              I also have skills about CI and Laravel.</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
