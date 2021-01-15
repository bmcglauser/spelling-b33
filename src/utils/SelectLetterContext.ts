import { createContext } from 'react';

interface ISelectLetterContext {
  selectLetter: (e: any, letter: string) => void
}

const SelectLetterContext = createContext<ISelectLetterContext>({
  selectLetter: () => {
    return;
  }
});

export default SelectLetterContext;
