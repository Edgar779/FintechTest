import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import API from './services/api';
import config from './config/config';
import Fintech from "./Fintech";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button,Modal } from 'react-bootstrap';
function App() {
  return (
    <Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={Fintech} />
          </Switch>
        
    
    </div></Router>
  );
}

export default App;
