import { createContext } from 'react';

interface IHoneycombContext {
  selectLetter: (e: any, letter: string) => void;
  scaleFactor: number;
}

const HoneycombContext = createContext<IHoneycombContext>({
  selectLetter: () => {
    return;
  },
  scaleFactor: 0
});

export default HoneycombContext;
