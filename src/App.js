import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Views/Home';
import LogIn from './Views/LogIn';
import SignUp from './Views/SignUp';
import CodeVerif from './Views/CodeVerif';
import FormRequest from './Views/Formulario';
import CreditProposal from './Views/CreditProposal';
import Payment from './Views/Payment';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route path='/SignUp' component={SignUp} />
          <Route path='/CodeVerif' component={CodeVerif} />
          <Route path='/inicio' component={Home} /> 
          <Route path='/formulario' component={FormRequest} />
          <Route path='/propuesta' component={CreditProposal} />
          <Route path='/pago' component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
