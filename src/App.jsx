import { useState } from 'react';
import Flashcard from './components/Flashcard';
import './App.css';
import verbs from './verbs';
import FormSpace from './components/FormSpace';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === verbs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? verbs.length - 1 : prevIndex - 1
    );
  };

  const currentWord = verbs[currentIndex];

  return (
    <>

      <div>
        <h1>Spanish Verbs</h1>
        <p>Please click on each card to reveal the definition of the verb.</p>
        <p>Total number of cards: 10</p>
      </div>

      <Flashcard
        word={currentWord.word}
        definition={currentWord.definition}
        type={currentWord.type} // Pass the type as a prop
      />

      <FormSpace 
        currentDefinition={currentWord.definition}
      />

      <div className="controls">
        <button onClick={handlePrevious}>Previous Card</button>
        <button onClick={handleNext}>Next Card</button>
      </div>
 
     
    </>
  )
}

export default App;
