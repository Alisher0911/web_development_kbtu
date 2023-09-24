import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h2>{count}</h2>
        <div className='my-5'>
          <button className='btn btn-danger mx-3'
            onClick={() => setCount(count - 1)}
            disabled={count === 0}>
            -
          </button>
          <button className='btn btn-success mx-3' onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
