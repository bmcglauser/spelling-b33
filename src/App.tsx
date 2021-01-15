import React, { useState } from 'react';
import './App.scss';
import DeleteButton from './components/Buttons/DeleteButton';
import Honeycomb from './containers/Honeycomb';
import LetterDisplay from './containers/LetterDisplay';
import ScrambleButton from './components/Buttons/ScrambleButton';
import SubmitButton from './components/Buttons/SubmitButton';
import ChosenLettersContext from './utils/ChosenLettersContext';


function App() {
  const [chosenLetters, setChosenLetters] :
        [chosenLetters: string[], setChosenLetters: Function]
        = useState([]);
  const [availLetters, setAvailLetters] :
        [availLetters: string[], setAvailLetters: Function]
        = useState(['B','C','D','E','F','G']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [centerLetter, setCenterLetter]:
        [centerLetter: string, setCenterLetter: Function]
        = useState('A');

  return (
    <ChosenLettersContext.Provider value={{chosenLetters, setChosenLetters, availLetters}}>
      <div className="app">
        <LetterDisplay />
        <Honeycomb centerLetter={centerLetter}/>
        <div className="buttons-wrapper">
          <DeleteButton />
          <ScrambleButton setAvailLetters={setAvailLetters}/>
          <SubmitButton />
        </div>
      </div>
    </ChosenLettersContext.Provider>
  );
}

export default App;
