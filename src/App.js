import React, { Component } from 'react';
import Introduce from './Introduce';
import Header from './Header';
import Carousels from './Carousels';
class App extends Component {
  constructor(props){
    super();
    this.state = {
      startAnimationIntro: false,
      startAnimationCarousel: false
    }
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 1006){
      this.setState({
        startAnimationCarousel: true
      });
    } else if(document.documentElement.scrollTop > 650){
      this.setState({
        startAnimationIntro: true
      });
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render() {
    return (
      <div>
        <Header/>
        <Introduce startAnimationIntro={this.state.startAnimationIntro}/>
        <Carousels startAnimationCarousel={this.state.startAnimationCarousel}/>
      </div>  
    );
  }
}

export default App;
