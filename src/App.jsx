import React, {Component} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Display} from './components/Display';
import {ClearButton} from './components/ClearButton';
//import * as math from 'mathjs';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false
    }
  }

  inputDigit = digit => {
    const { displayValue, waitingForOperand } = this.state;
    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit
      })
    }
  }

  // When you click on buttons, this function will be called
  // to update the input value

  inputDot = () => {
    const { displayValue } = this.state;

    if (!(/\./).test(displayValue)) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }

  performOperation = nextOperator => {
    const { value, displayValue, operator } = this.state;
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue)

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      }) 
    }
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
}


  clearDisplay = () => {
      this.setState({
        value: null,
        displayValue: '0',
        operator: null, 
        waitingForOperand: false
      })
  }
  
  render() {
    const { displayValue } = this.state; 

    return (
      <div className="app">
        <h1 className="calculator-title">ReactJS Calculator App</h1>

        <div className="calc-wrapper">
          <Display id="display" displayValue={displayValue} />
          <div className="row">
            <Button id="seven" onClick={() => this.inputDigit(7)}>
              7
            </Button>
            <Button id="eight" onClick={() => this.inputDigit(8)}>
              8
            </Button>
            <Button id="nine" onClick={() => this.inputDigit(9)}>
              9
            </Button>
            <Button id="divide" onClick={() => this.performOperation('/')}>
              /
            </Button>
          </div>
          <div className="row">
            <Button id="four" onClick={() => this.inputDigit(4)}>
              4
            </Button>
            <Button id="five" onClick={() => this.inputDigit(5)}>
              5
            </Button>
            <Button id="six" onClick={() => this.inputDigit(6)}>
              6
            </Button>
            <Button id="multiply" onClick={() => this.performOperation('*')}>
              *
            </Button>
          </div>
          <div className="row">
            <Button id="one" onClick={() => this.inputDigit(1)}>
              1
            </Button>
            <Button id="two" onClick={() => this.inputDigit(2)}>
              2
            </Button>
            <Button id="three" onClick={() => this.inputDigit(3)}>
              3
            </Button>
            <Button id="add" onClick={() => this.performOperation('+')}>
              +
            </Button>
          </div>
          <div className="row">
            <Button id="decimal" onClick={() => this.inputDot()}>
              .
            </Button>
            <Button id="zero" onClick={() => this.inputDigit(0)}>
              0
            </Button>
            <Button
              id="equals"
              onClick={() => this.performOperation('=')}
            >
              =
            </Button>
            <Button id="subtract" onClick={() => this.performOperation('-')}>
              -
            </Button>
          </div>
          <div className="row">
            <ClearButton id="clear" className="clear-btn" onClick={() => this.clearDisplay()}>
              Clear
            </ClearButton>
          </div>

          <p></p>
        </div>
      </div>
    )
  }
}
const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

export default App;
