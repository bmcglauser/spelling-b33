import { createContext } from 'react';

interface ISelectLetterContext {
  selectLetter: Function;
}

const SelectLetterContext = createContext<ISelectLetterContext>({selectLetter: ()=>{return }});

export default SelectLetterContext;