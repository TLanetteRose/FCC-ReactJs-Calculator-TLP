import React, {Component} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0",
      input: ""
    };
  }

  // When you click on buttons, this function will be called
  // to update the input value

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({input: math.evaluate(this.state.input)});
  };

  render() {
    return (
      <div className="app">
        <h1 className="calculator-title">ReactJS Calculator App</h1>
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button id="seven" value="7" handleClick={this.addToInput}>
              7
            </Button>
            <Button id="eight" value="8" handleClick={this.addToInput}>
              8
            </Button>
            <Button id="nine" value="9" handleClick={this.addToInput}>
              9
            </Button>
            <Button id="divide" value="/" handleClick={this.addToInput}>
              /
            </Button>
          </div>
          <div className="row">
            <Button id="four" value="4" handleClick={this.addToInput}>
              4
            </Button>
            <Button id="five" value="5" handleClick={this.addToInput}>
              5
            </Button>
            <Button id="six" value="6" handleClick={this.addToInput}>
              6
            </Button>
            <Button id="multiply" value="*" handleClick={this.addToInput}>
              *
            </Button>
          </div>
          <div className="row">
            <Button id="one" value="1" handleClick={this.addToInput}>
              1
            </Button>
            <Button id="two" value="2" handleClick={this.addToInput}>
              2
            </Button>
            <Button id="three" value="3" handleClick={this.addToInput}>
              3
            </Button>
            <Button id="add" value="+" handleClick={this.addToInput}>
              +
            </Button>
          </div>
          <div className="row">
            <Button id="decimal" value="." handleClick={this.addToInput}>
              .
            </Button>
            <Button id="zero" value="0" handleClick={this.addToInput}>
              0
            </Button>
            <Button
              id="equals"
              value="="
              handleClick={() => this.handleEqual()}
            >
              =
            </Button>
            <Button id="subtract" value="-" handleClick={this.addToInput}>
              -
            </Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
