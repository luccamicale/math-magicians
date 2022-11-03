import React from 'react';
import calculate from '../Logic/calculate';
import './styles.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onClickHandler = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(this.state, data);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="input">
          {total}
          {operation}
          {next}
        </div>
        <div className="keypad">
          <button onClick={this.onClickHandler} type="button" name="A/C">AC</button>
          <button onClick={this.onClickHandler} type="button" name="+/-">+/-</button>
          <button onClick={this.onClickHandler} type="button" name="%">%</button>
          <button onClick={this.onClickHandler} type="button" id="divide" name="÷">÷</button>
          <button onClick={this.onClickHandler} type="button" name="7">7</button>
          <button onClick={this.onClickHandler} type="button" name="8">8</button>
          <button onClick={this.onClickHandler} type="button" name="9">9</button>
          <button onClick={this.onClickHandler} type="button" id="mult" name="*">x</button>
          <button onClick={this.onClickHandler} type="button" name="4">4</button>
          <button onClick={this.onClickHandler} type="button" name="5">5</button>
          <button onClick={this.onClickHandler} type="button" name="6">6</button>
          <button onClick={this.onClickHandler} type="button" id="less">-</button>
          <button onClick={this.onClickHandler} type="button" name="1">1</button>
          <button onClick={this.onClickHandler} type="button" name="2">2</button>
          <button onClick={this.onClickHandler} type="button" name="3">3</button>
          <button onClick={this.onClickHandler} type="button" id="plus" name="+">+</button>
          <button onClick={this.onClickHandler} type="button" name=".">.</button>
          <button onClick={this.onClickHandler} type="button" id="equal" name="=">=</button>
          <button onClick={this.onClickHandler} type="button" id="cero" name="0" value="0">0</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
