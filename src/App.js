import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 2)
  }

  function decrement() {
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className="card">
      <h1 className="card-title text-center">Counter: {count}</h1>
      <div className="card-body d-flex justify-content-between">
        <button className="btn btn-info" onClick={increment}>Increment +</button>
        <button className="btn btn-secondary" onClick={decrement}>Decrement -</button>
        <button className="btn btn-danger" onClick={reset}>Reset 0</button>
      </div>
    </div>
  );
}

export default App;
