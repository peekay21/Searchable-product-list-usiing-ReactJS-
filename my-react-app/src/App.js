import React from 'react';

function handleClick() {
  alert('Button clicked by You!');
}


export default function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React app.</p>
      <button onClick={handleClick}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        Click Me!
      </button>
    </div>
  );
}