import React from 'react';
import Counter from './components/Counter';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎯 React Event Examples</h1>
      <Counter />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
