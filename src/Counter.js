import React from 'react';

const Counter = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Count: {count.toFixed(2)}</p> {/* 🔴 Bug: count may be string */}
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
