import React, { useState } from 'react';
import calculate from '../Logic/calculate';
import '../modules-css/calculator.css';

const Calculator = () => {
  const [count, setCount] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickHandler = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(count, data);
    setCount(result);
  };

  const { total, next, operation } = count;
  return (
    <div className="main-container">
      <h1 className="title-cal">Let s do some math!</h1>
      <div className="container">
        <div data-testid="testH2" className="input">
          {total}
          {operation}
          {next}
        </div>
        <div className="keypad">
          <button onClick={onClickHandler} type="button" name="A/C">AC</button>
          <button onClick={onClickHandler} type="button" name="+/-">+/-</button>
          <button onClick={onClickHandler} type="button" name="%">%</button>
          <button onClick={onClickHandler} type="button" id="divide" name="÷">÷</button>
          <button onClick={onClickHandler} type="button" name="7">7</button>
          <button onClick={onClickHandler} type="button" name="8">8</button>
          <button onClick={onClickHandler} type="button" name="9">9</button>
          <button onClick={onClickHandler} type="button" id="mult" name="*">x</button>
          <button onClick={onClickHandler} type="button" name="4">4</button>
          <button onClick={onClickHandler} type="button" name="5">5</button>
          <button onClick={onClickHandler} type="button" name="6">6</button>
          <button onClick={onClickHandler} type="button" id="less">-</button>
          <button onClick={onClickHandler} type="button" name="1">1</button>
          <button onClick={onClickHandler} type="button" name="2">2</button>
          <button onClick={onClickHandler} type="button" name="3">3</button>
          <button onClick={onClickHandler} type="button" id="plus" name="+">+</button>
          <button onClick={onClickHandler} type="button" name=".">.</button>
          <button onClick={onClickHandler} type="button" id="equal" name="=">=</button>
          <button onClick={onClickHandler} type="button" id="cero" name="0" value="0">0</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
