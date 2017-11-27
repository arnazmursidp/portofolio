import React, { Component } from 'react';
import '../media/css/Carousel.css';
import { Carousel } from 'react-bootstrap';
import me from '../media/images/cropped.jpg';
class Carousels extends Component {
  render() {
    var start = this.props.startAnimationCarousel;
    return (
      <div className="App-carousel">
        <Carousel className={start === false ? 'animationing' : 'hidden'}>
          <Carousel.Item>
          <img height={659} src={me} />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>  
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img height={659} src={me} />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>  
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img height={659} src={me} />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>  
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img height={659} src={me} />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>  
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carousels;
