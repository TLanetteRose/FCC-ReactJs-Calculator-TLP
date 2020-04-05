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
        </div>
      </div>
    );
  }
}

export default App;
