import { createContext } from 'react';

interface IChosenLettersContext {
  chosenLetters: string[];
  availLetters: string[];
  setChosenLetters: Function;
}

const ChosenLettersContext = createContext<IChosenLettersContext>({
  chosenLetters: [],
  setChosenLetters: () => {
    return;
  },
  availLetters: []
});

export default ChosenLettersContext;
