import React from 'react';

const Counter = ({ count, onIncrement }) => {
  let displayCount;

  // Type check to ensure count is a number
  if (typeof count === 'number' && !isNaN(count)) {
    displayCount = count.toFixed(2);
  } else {
    console.warn('Count is not a number:', count); // Debugging
    displayCount = 'Invalid count';
  }

  return (
    <div>
      <p>Count: {displayCount}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
