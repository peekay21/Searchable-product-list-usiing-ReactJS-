import React from 'react';

function Button({onClick, children}){
  return (
    <div>
    <button onClick={onClick}>
      {children}
    </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Button onClick={() => alert('Playing')}>Playing Movie</Button>
      <Button onClick={() => alert('Uploading')}>Upload Image</Button>
    </div>
  );
}
