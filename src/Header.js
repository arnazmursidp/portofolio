import React, { Component } from 'react';
import '../media/css/Header.css';
class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="divh1">
            <h1 className="App-h1">Arnaz <span className="span-mursid">Mursid</span> Prakasa</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
