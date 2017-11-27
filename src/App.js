import React, { Component } from 'react';
import Introduce from './Introduce';
import Header from './Header';
class App extends Component {
  // constructor(props){
  //   super(p)
  // }
  render() {
    return (
      <div>
        <Header/>
        <Introduce/>
      </div>  
    );
  }
}

export default App;
