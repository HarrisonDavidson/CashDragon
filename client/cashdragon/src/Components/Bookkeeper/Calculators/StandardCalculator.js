import React, { useState } from 'react';

const StandardCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num.toString());
    }
  };

  const handleOperatorClick = (op) => {
    if (prevValue !== null) {
      calculate();
    }
    setPrevValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue('0');
  };

  const calculate = () => {
    if (prevValue !== null && operator !== null) {
      const currentValue = parseFloat(displayValue);
      let result = 0;

      switch (operator) {
        case '+':
          result = prevValue + currentValue;
          break;
        case '-':
          result = prevValue - currentValue;
          break;
        case '*':
          result = prevValue * currentValue;
          break;
        case '/':
          result = prevValue / currentValue;
          break;
        default:
          break;
      }

      setPrevValue(null);
      setOperator(null);
      setDisplayValue(result.toString());
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setPrevValue(null);
    setOperator(null);
  };

  return (
    <div>
      <h1>Standard Calculator</h1>
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => handleNumberClick(7)}>7</button>
            <button onClick={() => handleNumberClick(8)}>8</button>
            <button onClick={() => handleNumberClick(9)}>9</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick(4)}>4</button>
            <button onClick={() => handleNumberClick(5)}>5</button>
            <button onClick={() => handleNumberClick(6)}>6</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick(1)}>1</button>
            <button onClick={() => handleNumberClick(2)}>2</button>
            <button onClick={() => handleNumberClick(3)}>3</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick(0)}>0</button>
            <button onClick={handleClearClick}>C</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardCalculator;
