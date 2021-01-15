import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.scss';
import DeleteButton from './components/Buttons/DeleteButton';
import Honeycomb from './containers/Honeycomb';
import LetterDisplay from './containers/LetterDisplay';
import ScrambleButton from './components/Buttons/ScrambleButton';
import SubmitButton from './components/Buttons/SubmitButton';
import LettersContext from './utils/LettersContext';
import MessageDisplay from './containers/MessageDisplay';

export interface IMessageInfo {
  displayMessage: boolean;
  type: 'tooshort' | 'goodword' | 'centerrequired' | 'notaword';
  recentPoints: number;
}

function App() {
  const [chosenLetters, setChosenLetters]: [
    chosenLetters: string[],
    setChosenLetters: Dispatch<SetStateAction<string[]>>
  ] = useState<string[]>([]);
  const [availLetters, setAvailLetters]: [
    availLetters: string[],
    setAvailLetters: Dispatch<SetStateAction<string[]>>
  ] = useState(['B', 'C', 'D', 'E', 'F', 'G']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [centerLetter, setCenterLetter]: [
    centerLetter: string,
    setCenterLetter: Dispatch<SetStateAction<string>>
  ] = useState('A');
  const [points, setPoints]: [
    points: number,
    setPoints: Dispatch<SetStateAction<number>>
  ] = useState(0);
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
      value={{ chosenLetters, setChosenLetters, availLetters }}
    >
      <div className="app">
        <MessageDisplay messageInfo={messageInfo} />
        <LetterDisplay />
        <Honeycomb centerLetter={centerLetter} setMessageInfo={setMessageInfo}/>
        <div className="buttons-wrapper">
          <DeleteButton />
          <ScrambleButton setAvailLetters={setAvailLetters} />
          <SubmitButton centerLetter={centerLetter} setPoints={setPoints} setMessageInfo={setMessageInfo}/>
        </div>
      </div>
    </LettersContext.Provider>
  );
}

export default App;
