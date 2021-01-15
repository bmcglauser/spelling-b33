import { createContext, Dispatch, SetStateAction } from 'react';

interface ILettersContext {
  chosenLetters: string[];
  availLetters: string[];
  setChosenLetters: Dispatch<SetStateAction<string[]>>;
}

const LettersContext = createContext<ILettersContext>({
  chosenLetters: [],
  setChosenLetters: () => {
    return;
  },
  availLetters: []
});

export default LettersContext;
