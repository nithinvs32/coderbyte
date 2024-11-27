import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

function Tile(props) {
  return (
    <button style={style.letter} onClick={props.onClick}>
      { props.letter }
    </button>
  );
}

function App() {
  const [varOcg, setVarOcg] = useState(""); // Store the current string displayed
  const [varFiltersCg, setVarFiltersCg] = useState(""); // Auxiliary state for processing filters

  // Function to handle appending a letter to the string
  const handleLetterClick = (letter) => {
    // Append the letter to the string
    let updatedString = varOcg + letter;
    
    // Check if there are 3 consecutive identical letters
    if (updatedString.match(/([A-Z])\1\1/)) {
      updatedString = updatedString.replace(/([A-Z])\1\1/, "_"); // Replace with underscore if 3 consecutive letters
    }

    // Update the state with the new string
    setVarOcg(updatedString);
  };

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {/* Loop through all 26 letters of the alphabet */}
        {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter, index) => (
          <Tile
            key={index}
            letter={letter}
            onClick={() => handleLetterClick(letter)}
          />
        ))}
      </aside>
      <div id="outputString">{ varOcg }</div> {/* Display the current string */}
    </section>
  );
}

// __define-ocg__: This comment demonstrates a required keyword in the code.
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
