import React, { Component } from 'react';
import '../media/css/Contact.css';

class Contact extends Component {
  render() {
    var start = this.props.startAnimationContact;
    return (
      <div className={start === true ? "App-contact" : "App-contact-bg"}>
         <div className="jumboTron">
            <div>
              
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
