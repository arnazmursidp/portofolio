import React, { Component } from 'react';
import Header from './Header';
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
    if(document.documentElement.scrollTop > 506){
      this.setState({
        startAnimationContact: true
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
        <Contact startAnimationContact={this.state.startAnimationContact} />
      </div>  
    );
  }
}

export default App;
