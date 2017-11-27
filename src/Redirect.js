import React, { Component } from 'react';
import '../media/css/Redirect.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import App from './App';

class Redirect extends Component{
    render(){
        return(
            <Router>    
                <Link to="/home">Use desktop for better experience</Link>
                
                <Route path="/home" component={App}/>
            </Router>
        )
    }
}

export default Redirect