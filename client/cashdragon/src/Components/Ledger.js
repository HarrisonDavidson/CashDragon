import React, { useState, useEffect } from 'react';
function Ledger() {
    const [balance, setBalance] = useState(0);
    const [transactionAmount, setTransactionAmount] = useState(0);
  
    useEffect(() => {
      fetch('/database.json')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            setBalance(data.balance);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const handleTransaction = (type) => {
      if (transactionAmount !== 0) {
        const newBalance = type === 'deposit' ? balance + transactionAmount : balance - transactionAmount;
        setBalance(newBalance);
        setTransactionAmount(0);
  
        fetch('/updateBalance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ balance: newBalance }),
        });
      }
    };
  
    return (
      <div className="App">
        <h1>Ledger</h1>
        <p>Current Balance: ${balance}</p>
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
        />
        <button onClick={() => handleTransaction('deposit')}>Deposit</button>
        <button onClick={() => handleTransaction('withdraw')}>Withdraw</button>
      </div>
    );
  }
  
  export default Ledger;
  