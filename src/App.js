import React, { useState, useEffect } from 'react';
import Clicker from './components/Clicker';
import ClickerTwo from './components/ClickerTwo'

function App() {
  const [isClicker, setClicker] = useState(false);

  // componentDidMount
  useEffect(() => {
    console.log('Render');
  }, []);

  // componentDidUpdated
  useEffect(() => {
    console.log(isClicker);
  }, [isClicker])

  // componentWilUnmount
  useEffect(() => {

    return () => console.log('Hello');
  }, [isClicker])

  // componentDidMount() {}
  // componentDidUpdated() {}
  // componentWilUnmount() {}
  // =====================//
  // ------ useEffect -----//

  return (
    <div className='App'>
      <div className="card">
        <h1 className='card-title'>Hello world</h1>
        <button className='btn btn-success' onClick={() => setClicker(!isClicker)}>Togel Clicker</button>
        {isClicker && <Clicker />}
      </div>
      <ClickerTwo />
    </div>
  );
}

export default App;
