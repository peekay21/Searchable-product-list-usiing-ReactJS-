export default function App() {
  function handleClick() {
    const button = document.querySelector('#toggleButton');
    if (button.style.backgroundColor === 'black') {
      button.style.backgroundColor = 'white';
      button.style.color = 'black';
    } else {
      button.style.backgroundColor = 'black';
      button.style.color = 'white';
    }
  }

  return (
    <button
      id="toggleButton"
      onClick={handleClick}
      style={{
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '5px'
      }}
    >
      Toggle the lights
    </button>
  );
}
