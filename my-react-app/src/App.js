import React from 'react';
import { useState } from 'react';

export default function App(){
  const [count, setCount] = useState(0);

  function handleClick(num) {
    setCount(count + num);
  }

  return (
    <div>
      <h1>My React App</h1>
      <button onClick={()=>handleClick(1)}>+1</button>
      <button onClick={()=>handleClick(3)}>+3</button>


      <p>Count: {count}</p>


    </div>
  );
} 