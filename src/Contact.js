import React, { Component } from 'react';
import '../media/css/Contact.css';
import { Jumbotron, Button } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="App-contact">
         <div className="jumboTron">
            <div>
              <h1>CONTACT</h1>
            </div>
            <div>
              <h2>081905645803</h2>
              <h4>Kp. Pasirhandap, Ds. Pagerwangi, Kab. Bandung Barat, Lembang, Indonesia</h4>
            </div>  
         </div>
      </div>
    );
  }
}

export default Contact;
