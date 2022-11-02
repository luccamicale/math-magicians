import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <form>
          <input type="text" />
        </form>
        <div className="keypad">
          <button type="button" name="A/C">A/C</button>
          <button type="button" name="+/-">+/-</button>
          <button type="button" name="%">%</button>
          <button type="button" id="divide" name="/">&divide;</button>
          <button type="button" name="7">7</button>
          <button type="button" name="8">8</button>
          <button type="button" name="9">9</button>
          <button type="button" id="mult" name="*">&ndash;</button>
          <button type="button" name="4">4</button>
          <button type="button" name="5">5</button>
          <button type="button" name="6">6</button>
          <button type="button" id="less" name="-">&times;</button>
          <button type="button" name="1">1</button>
          <button type="button" name="2">2</button>
          <button type="button" name="3">3</button>
          <button type="button" id="plus" name="+">+</button>
          <button type="button" name=".">.</button>
          <button type="button" id="equal" name="=">=</button>
          <button type="button" id="cero" name="0">0</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
