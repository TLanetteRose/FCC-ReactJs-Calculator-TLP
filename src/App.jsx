import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <div className="row">
            <Button id="seven">7</Button>
            <Button id="eight">8</Button>
            <Button id="nine">9</Button>
            <Button id="divide">/</Button>
          </div>
          <div className="row">
            <Button id="four">4</Button>
            <Button id="five">5</Button>
            <Button id="six">6</Button>
            <Button id="multiply">*</Button>
          </div>
          <div className="row">
            <Button id="one">1</Button>
            <Button id="two">2</Button>
            <Button id="three">3</Button>
            <Button id="add">+</Button>
          </div>
          <div className="row">
            <Button id="decimal">.</Button>
            <Button id="zero">0</Button>
            <Button id="equal">=</Button>
            <Button id="subtract">-</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
