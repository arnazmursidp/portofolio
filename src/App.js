import React, { Component } from 'react';
import Introduce from './Introduce';
import Header from './Header';
import Carousels from './Carousels';
import Contact from './Contact';
class App extends Component {
  constructor(props){
    super();
    this.state = {
      startAnimationIntro: false,
      startAnimationCarousel: false,
      startAnimationContact: false
    }
  }

  handleScroll = () => {
    if(document.documentElement.scrollTop > 1006){
      this.setState({
        startAnimationContact: true
      });
    } else if(document.documentElement.scrollTop > 500){
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
        <Contact startAnimationContact={this.state.startAnimationContact} />
      </div>  
    );
  }
}

export default App;
