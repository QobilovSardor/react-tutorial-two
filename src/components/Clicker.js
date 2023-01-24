import React, {useState} from 'react';

const Clicker = () => {
  const [state, setstate] = useState(0);

  return (
    <div>
      <div className="card-body">
        <h1 className="card-title text-center">Counter: {state}</h1>
        <div className="card-body d-flex justify-content-between">
          <button className="btn btn-info" onClick={() => setstate(state +1)}>Increment +</button>
          <button className="btn btn-secondary" onClick={() => setstate(state -1)}>Decrement -</button>
          <button className="btn btn-danger" onClick={() => setstate(0)}>Reset 0</button>
        </div>
      </div>
    </div>
  );
};

export default Clicker;