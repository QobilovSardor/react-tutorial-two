import React, { useRef, useEffect } from 'react';

const ClickerTwo = () => {
  const inputRef = useRef(null);

  const hendlerClick = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  return (
    <div className='card'>
      <h1>ClickerTwo</h1>
      <input className='form-control my-3' type="text" placeholder='Text...' ref={inputRef} />
      <button className='btn btn-primary' onClick={hendlerClick}>Ref</button>
    </div>
  );
};

export default ClickerTwo;