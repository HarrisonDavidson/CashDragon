import { useState, useEffect } from "react";

// const apiUrl = "https://localhost:7178";
const baseUrl = '/api/Ledger';

const GetLedgerById = () => {
  const [ledger, setLedger] = useState(null);

  useEffect(() => {
    fetch('/api/Ledger/GetLedgerById')
    .then(response => response.json())
    .then(data => {
      setLedger(data);
    })})

    return (
      <div>
        {ledger !== null ? (
          <>Dragon's Hoard: {ledger}</>
        ) : (
          <></>
        )}
      </div>
    )
        };

    export default GetLedgerById