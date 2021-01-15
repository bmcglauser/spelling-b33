import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.scss';
import DeleteButton from './components/Buttons/DeleteButton';
import Honeycomb from './containers/Honeycomb';
import LetterDisplay from './containers/LetterDisplay';
import ScrambleButton from './components/Buttons/ScrambleButton';
import SubmitButton from './components/Buttons/SubmitButton';
import LettersContext from './utils/LettersContext';
import MessageDisplay from './components/MessageDisplay';
import ScoreDisplay from './components/ScoreDisplay';

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

function App() {
  const [chosenLetters, setChosenLetters]: [
    chosenLetters: string[],
    setChosenLetters: Dispatch<SetStateAction<string[]>>
  ] = useState<string[]>([]);
  const [allLetters, setAllLetters]: [
    allLetters: IAllLetters,
    setAllLetters: Dispatch<SetStateAction<IAllLetters>>
  ] = useState({
    centerLetter: 'A',
    perimLetters: ['B', 'C', 'D', 'E', 'F', 'G']
  });
  const [scoreInfo, setScoreInfo]: [
    scoreInfo: IScoreInfo,
    setScoreInfo: Dispatch<SetStateAction<IScoreInfo>>
  ] = useState<IScoreInfo>({
    totalPoints: 0,
    foundWords: []
  });
  const [messageInfo, setMessageInfo]: [
    messageInfo: IMessageInfo,
    setDisplayMessage: Dispatch<SetStateAction<IMessageInfo>>
  ] = useState<IMessageInfo>({
    displayMessage: false,
    type: 'centerrequired',
    recentPoints: 2
  });

  return (
    <LettersContext.Provider
      value={{ chosenLetters, setChosenLetters, allLetters }}
    >
      <div className="app">
        <ScoreDisplay scoreInfo={scoreInfo} />
        <MessageDisplay messageInfo={messageInfo} />
        <LetterDisplay />
        <Honeycomb setMessageInfo={setMessageInfo} />
        <div className="buttons-wrapper">
          <DeleteButton />
          <ScrambleButton setAllLetters={setAllLetters} />
          <SubmitButton
            setScoreInfo={setScoreInfo}
            setMessageInfo={setMessageInfo}
          />
        </div>
      </div>
    </LettersContext.Provider>
  );
}

export default App;
