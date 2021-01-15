import { createContext, Dispatch, SetStateAction } from 'react';
import { IAllLetters } from '../App';

interface ILettersContext {
  allLetters: IAllLetters;
  chosenLetters: string[];
  setChosenLetters: Dispatch<SetStateAction<string[]>>;
}

const LettersContext = createContext<ILettersContext>({
  chosenLetters: [],
  setChosenLetters: () => {
    return;
  },
  allLetters: {
    centerLetter: '',
    perimLetters: []
  }
});

export default LettersContext;
