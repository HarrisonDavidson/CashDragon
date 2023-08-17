import React, { useState, useEffect } from 'react';


function Hoard() {
    const [balance2, setBalance2] = useState(1500);
    const [transactionAmount, setTransactionAmount] = useState(0);
  
    useEffect(() => {
      fetch('/database.json')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
            setBalance2(data.balance2);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const handleTransaction = (type) => {
      if (transactionAmount !== 0) {
        const newBalance2 = type === 'deposit' ? balance2 + transactionAmount : balance2 - transactionAmount;
        setBalance2(newBalance2);
        setTransactionAmount(0);
  
        fetch('/updateBalance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ balance2: newBalance2 }),
        });
      }
    };
  
    return (
      <div className="hoard">
        <h1>Dragon's Hoard</h1>
        <p>Current Balance: ${balance2}</p>
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
  
  export default Hoard;
  