// import React from 'react';
// import LedgerDisplay from '../../../Managers/LedgerManager'

// function Ledger() {
//   return (
//     <div className="App">
//       <LedgerDisplay />
//     </div>
//   );
// }

// export default Ledger;

import React, { useState, useEffect } from 'react';
import { ledger } from '../../../Managers/LedgerManager';

function LedgerDisplay() {
  const [ledgers, setLedgers] = useState([]);

  return (
    <div>
      <h1>Ledger Data</h1>
      <table>
        <thead>
          <tr>
            <th>LedgerId</th>
            <th>UserProfileId</th>
            <th>LedgerAmount</th>
          </tr>
        </thead>
        <tbody>
          {ledgers.map(ledger => (
            <tr key={ledger.LedgerId}>
              <td>{ledger.LedgerId}</td>
              <td>{ledger.UserProfileId}</td>
              <td>{ledger.LedgerAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export {LedgerDisplay}