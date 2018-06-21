import React, { Component } from 'react';
import '../media/css/Contact.css';

class Contact extends Component {
  render() {
    var start = this.props.startAnimationContact;
    return (
      <div className={start === true ? "App-contact" : "App-contact-bg"}>
         <div className="jumboTron">
            <div className={start === true ? "socialMedia" : 'nones'}>
              <div className="divRow">
                <div className={start === true ? "lefts" : 'hidden'} style={{ backgroundColor: 'rgb(250, 250, 250)'}}><a href="https://instagram.com/arnazmursidp"><i className="fa fa-instagram fa-lg"></i></a></div>
                <div className={start === true ? "rights" : 'hidden'} style={{ backgroundColor: 'rgb(247, 247, 247)'}}><a href="https://twitter.com/arnazmursidp"><i className="fa fa-twitter fa-lg"></i></a></div>
              </div>
              <div className="divRow">
                <div className={start === true ? "lefts" : 'hidden'} style={{ backgroundColor: 'rgb(243, 243, 243)'}}><a href="https://facebook.com/arnazmursidp"><i className="fa fa-facebook fa-lg"></i></a></div>
                <div className={start === true ? "rights" : 'hidden'}><i className="fa fa-phone fa-lg"></i></div>
              </div>
            </div>
         </div>
      </div>
    );
  }
}

export default Contact;
