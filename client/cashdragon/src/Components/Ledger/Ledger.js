import React, { useEffect, useState } from 'react';
import NumberDisplay from './NumberDisplay';

const App = () => {
  const [decimalNumber, setDecimalNumber] = useState(null);

  useEffect(() => {
    fetchData().then((number) => {
      if (number !== null) {
        setDecimalNumber(number);
      }
    });
  }, []);

  return (
    <div>
      {decimalNumber !== null ? (
        <NumberDisplay decimalNumber={decimalNumber.toFixed(2)} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;