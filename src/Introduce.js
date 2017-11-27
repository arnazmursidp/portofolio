import React, { Component } from 'react';
import '../media/css/Introduce.css';
import me from '../media/images/me.jpg'
import { Col, Row, Collapse, Carousel } from 'react-bootstrap';


class Introduce extends Component {
  render() {
    var start = this.props.startAnimation;
    return (
        <div className="App-introduce">
            <div className={start === true ? 'index' : 'hidden'}>
                <img src={me} href="#"/>
            </div>
            <div className={start === true ? 'show' : 'hidden'}>
                <div className="App-p-div">
                    <b><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></b>
                 </div>
            </div>  
        </div>
    );
  }
}

export default Introduce;
