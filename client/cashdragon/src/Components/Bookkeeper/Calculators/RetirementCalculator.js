import React, { useState } from 'react';

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [annualContribution, setAnnualContribution] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [retirementSavings, setRetirementSavings] = useState(0);

  const calculateRetirementSavings = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const annualInterestRate = interestRate / 100;
    let futureSavings = currentSavings;

    for (let year = 0; year < yearsToRetirement; year++) {
      futureSavings += annualContribution;
      futureSavings *= 1 + annualInterestRate;
    }

    setRetirementSavings(futureSavings.toFixed(2));
  };

  return (
    <div>
      <h1>Retirement Savings Calculator</h1>
      <div>
        <label>Current Age</label>
        <input
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
        />
      </div>
      <div>
        <label>Desired Retirement Age</label>
        <input
          type="number"
          value={retirementAge}
          onChange={(e) => setRetirementAge(e.target.value)}
        />
      </div>
      <div>
        <label>Current Savings ($)</label>
        <input
          type="number"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Contribution ($)</label>
        <input
          type="number"
          value={annualContribution}
          onChange={(e) => setAnnualContribution(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <button onClick={calculateRetirementSavings}>Calculate</button>
      <div>
        <h2>Projected Retirement Savings: ${retirementSavings}</h2>
      </div>
    </div>
  );
};

export default RetirementCalculator;
