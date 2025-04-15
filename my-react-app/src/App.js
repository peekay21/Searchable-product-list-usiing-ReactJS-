export default function App() {
  function handleClick() {
    let bodyStyle = document.body.style;
    
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
      Toggle the lights
    </button>
  );
}
