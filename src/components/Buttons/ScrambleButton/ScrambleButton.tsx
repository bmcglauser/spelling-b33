import React, { Dispatch, FunctionComponent, SetStateAction, useContext } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import LettersContext from '../../../utils/LettersContext';
import './ScrambleButton.scss';

interface ScrambleButtonProps {
  setAvailLetters: Dispatch<SetStateAction<string[]>>;
}

const ScrambleButton: FunctionComponent<ScrambleButtonProps> = ({
  setAvailLetters
}) => {
  const { availLetters } = useContext(LettersContext);

  function scrambleHandler(e: any) {
    e.preventDefault();
    let arrayToRandomize = [...availLetters];
    let randomizedArr: string[] = [];
    for (let i = 0; i < 6; i++) {
      let x = Math.floor(Math.random() * (6 - i));
      let el = arrayToRandomize[x];
      arrayToRandomize.splice(x, 1);
      randomizedArr.push(el);
    }
    setAvailLetters(randomizedArr);
  }

  return (
    <button className="scramble-button" onClick={scrambleHandler}>
      <FiRefreshCw className="scramble-icon" />
    </button>
  );
};

export default ScrambleButton;
