import React, { Component } from 'react';
import Introduce from './Introduce';
import Header from './Header';
import Carousel from './Carousel';
class App extends Component {
  constructor(props){
    super();
    this.state = {
      startAnimationIntro: false;
      startAnimationCarousel: false;
    }
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 650){
      this.setState({
        startAnimationIntro: true
      })
    } else if(document.documentElement.scrollTop > 1000){
      this.setState({
        startAnimationCarousel: true
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
        <Introduce startAnimation={this.state.startAnimationIntro}/>
        <Carousel startAnimation={this.state.startAnimationCarousel}/>
      </div>  
    );
  }
}

export default App;
