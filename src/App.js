import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount('0'); // 🔴 Bug: Passing string instead of number
  };

  return (
    <div>
      <h1>React Debugging Example</h1>
      <Counter count={count} onIncrement={() => setCount(count + 1)} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
