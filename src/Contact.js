import React, { Component } from 'react';
import '../media/css/Contact.css';

class Contact extends Component {
  render() {
    var start = this.props.startAnimationContact;
    return (
      <div className={start === true ? "App-contact" : "App-contact-bg"}>
         <div className="jumboTron">
            <div>
              <h2>081905645803</h2>
            </div>  
            <div className={start === true ? "contact" : "hidden"}>    
              <h1 className={start === true ? "h1-jumbotron" : "hidden"}>Contact</h1>
            </div>
         </div>
      </div>
    );
  }
}

export default Contact;
