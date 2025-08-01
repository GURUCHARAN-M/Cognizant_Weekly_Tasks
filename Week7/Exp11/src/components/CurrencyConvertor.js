import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Synthetic event
    const rate = 0.011; // 1 INR = 0.011 Euro (example rate)
    const result = parseFloat(rupees) * rate;
    setEuro(result.toFixed(2));
  };

  return (
    <div>
      <h2>💱 Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter amount in Rupees: </label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          required
        />
        <button type="submit">Convert</button>
      </form>
      {euro && (
        <p>
          💶 Converted Amount: <strong>{euro} Euros</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
