import React, { Component } from 'react';
import Introduce from './Introduce';
import Header from './Header';
class App extends Component {
  constructor(props){
    super();
    this.state = {
      startAnimation: false
    }
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 650){
      this.setState({
        startAnimation: true
      })
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render() {
    return (
      <div>
        <Header/>
        <Introduce startAnimation={this.state.startAnimation}/>
      </div>  
    );
  }
}

export default App;
