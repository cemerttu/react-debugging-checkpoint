import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0); // ✅ Make sure this is a number (NOT '0' as a string)
  };

  const handleIncrement = () => {
    setCount(prev => prev + 1); // Always number + 1
  };

  return (
    <div>
      <h1>React Debugging Example</h1>
      <Counter count={count} onIncrement={handleIncrement} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
