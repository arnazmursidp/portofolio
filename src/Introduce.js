import React, { Component } from 'react';
import '../media/css/Introduce.css';
import me from '../media/images/GANTENG.jpg'
import { Col, Row } from 'react-bootstrap';


class Introduce extends Component {
  render() {
    var start = this.props.startAnimationIntro;
    return (
        <div className="App-introduce">
            <div className={start === true ? 'hoverImg' : 'hidden'}>
                <a href="https://github.com/arnazmursidp">Github</a>
                <a href="https://linkedin.com/in/arnazmursidp">LinkedIn</a>
                <a href="https://github.com/arnazmursidp">CV</a>
            </div>
            <div className={start === true ? 'index' : 'hidden'}>
                <img src={me} href="#"/>
            </div>
            <div className={start === true ? 'show' : 'hidden'}>
                <div className="App-p-div">
                    <b><p>Arnaz Mursid Prakasa, 18 years old boy who loves to code, and kind of adventure games, and quite too-ala-ala-artsy black and white enthusiast, <span className="yellow">Cheesy combos</span> are my favorite!</p></b>
                 </div>
            </div>  
        </div>
    );
  }
}

export default Introduce;
