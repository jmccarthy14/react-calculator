import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './Calculator.css';
import KeyPad from './KeyPad.js';

class Calculator extends Component {
    static propTypes = {
	value: PropTypes.number.isRequired
    };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to your first React app Joseph!</h2>
	  <h3 className="App-subheader">(Didnt you want to fucking hate it)</h3>
        </div>
        <p className="App-intro">
	    <div className="Calc-display">{this.props.value}</div>
	    <KeyPad />
        </p>
      </div>
    );
  }
}

export default Calculator;
