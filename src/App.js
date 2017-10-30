import React, { Component } from 'react';
import logo from './logo.svg';
import '../media/css/App.css';

class App extends Component {
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
        </div>
      </div>
    );
  }
}

export default App;
