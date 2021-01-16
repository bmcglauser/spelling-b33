import { createContext, Dispatch, SetStateAction } from 'react';

interface IStateContext {
  state: IState
  setState: Dispatch<SetStateAction<IState>>;
}

export interface IMessageInfo {
  displayMessage: boolean;
  type: 'tooshort' | 'goodword' | 'centerrequired' | 'notaword';
  recentPoints: number;
}

export interface IScoreInfo {
  totalPoints: number;
  foundWords: string[];
}

export interface IAllLetters {
  centerLetter: string;
  perimLetters: string[];
}

export interface IState {
  chosenLetters: string[];
  allLetters: IAllLetters;
  scoreInfo: IScoreInfo;
  messageInfo: IMessageInfo;
}

const StateContext = createContext<IStateContext>({
  state: {
    chosenLetters: [],
    allLetters: {centerLetter: '', perimLetters: []},
    scoreInfo: {totalPoints: 0, foundWords: []},
    messageInfo: {
      displayMessage: false,
      type: 'tooshort',
      recentPoints: 0
    }
  },
  setState: () => {
    return;
  }
});

export default StateContext;
