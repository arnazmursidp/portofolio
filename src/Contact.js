import React, { Component } from 'react';
import '../media/css/Contact.css';

class Contact extends Component {
  render() {
    var start = this.props.startAnimationContact;
    return (
      <div className={start === true ? "App-contact" : "App-contact-bg"}>
         <div className="jumboTron">
            <div className={start === true ? "socialMedia" : 'hidden'}>
              <div><h4><a href="https://instagram.com/arnazmursidp">Instagram</a></h4><i className="fa fa-instagram fa-lg"></i></div>
              <div><h4><a href="https://twitter.com/arnazmursidp">Twitter</a></h4><i className="fa fa-twitter fa-lg"></i></div>
              <div><h4><a href="https://facebook.com/arnazmursidp">Facebook</a></h4><i className="fa fa-facebook fa-lg"></i></div>
              <div><h4 className="small">081905645803</h4><i className="fa fa-phone fa-lg"></i></div>
            </div>  
            <div className={start === true ? "contact" : "hidden"}>    
              <p className={start === true ? "h1-jumbotron" : "hidden"}>Contact</p>
              <h4>Communication leads to community, that is, to understanding, intimacy and mutual valuing. - <b>Rollo May</b></h4>
            </div>
         </div>
      </div>
    );
  }
}

export default Contact;
