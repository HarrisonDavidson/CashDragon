import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    // Convert interest rate to decimal
    const monthlyInterestRate = interestRate / 100 / 12;
    // Convert loan term to months
    const totalPayments = loanTerm * 12;

    // Calculate monthly payment using the formula
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <div>
        <label>Loan Amount ($)</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label>Loan Term (years)</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate</button>
      <div>
        <h2>Monthly Payment: ${monthlyPayment}</h2>
      </div>
    </div>
  );
};

export default MortgageCalculator;
