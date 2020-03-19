import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'
import './App.css';
import { render } from '@testing-library/react';
import { ButtonGroup } from 'react-bootstrap';

class App extends Component {
  render(){
    return (
      <Router basename="loginform">
        <div className="App">
          <div className="App__Form" >
            
            <div className="PageSwitcher" >
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item" >Sign In</NavLink>
                <NavLink to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            <hr />

            <div className="FormTitle" >
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link" >Sign In</NavLink> or
              <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
    
            </div>

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
