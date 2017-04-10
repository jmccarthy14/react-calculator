import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './Calculator.css';
import DigitKeyPad from './DigitKeyPad.js';
import OperatorKeyPad from './OperatorKeyPad.js';
import {newDigit} from '../actions.js';

class Calculator extends Component {
    static propTypes = {
	store: PropTypes.object.isRequired
    }

    constructor(props) {
	super(props);
	this.store = props.store;
	this.state = this.store.getState();
	console.log(newDigit);
    }

    onDigitClick(digitValue, store) {
	store.dispatch(
	    newDigit(digitValue)
	);

    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to your first React app Joseph!</h2>
	  <h3 className="App-subheader">(Didnt you want to fucking hate it)</h3>
        </div>
        <span className="App-intro">
	    <div className="Calc-display">{this.store.getState().displayValue}</div>
	    <DigitKeyPad className='DigitKeyPad' digitClickHandler={(digit) => this.onDigitClick(digit, this.store)}/>
	    <OperatorKeyPad className='OperatorKeyPad' operatorClickHandler={(operator) => this.onOperatorClick(operator, this.store)} />
        </span>
      </div>
    );
  }
}

export default Calculator;
