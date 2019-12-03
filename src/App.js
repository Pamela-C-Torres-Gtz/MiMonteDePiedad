import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Views/Home';
import LogIn from './Views/LogIn';
import FormRequest from './Views/FormRequest';
import CreditProposal from './Views/CreditProposal';
import Payment from './Views/Payment';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route path='/inicio' component={Home} /> 
          <Route path='/solicitudcredito' component={FormRequest} />
          <Route path='/propuesta' component={CreditProposal} />
          <Route path='/pago' component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
