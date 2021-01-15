import React, { FunctionComponent, useContext } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import ChosenLettersContext from '../../../utils/ChosenLettersContext';
import './ScrambleButton.scss';

interface ScrambleButtonProps {
  setAvailLetters: Function;
}

const ScrambleButton: FunctionComponent<ScrambleButtonProps> = ({setAvailLetters}) => {
  
  const {availLetters} = useContext(ChosenLettersContext);

  function scrambleHandler(e: any) {
    e.preventDefault();
    let arrayToRandomize = [...availLetters];
    let randomizedArr: string[]= [];
    for (let i = 0; i < 6; i++) {
      let x = Math.floor(Math.random()*(6-i));
      let el = arrayToRandomize[x];
      arrayToRandomize.splice(x, 1);
      randomizedArr.push(el);
    }
    setAvailLetters(randomizedArr);
  };
  
  
  return (
    <button className='scramble-button' onClick={scrambleHandler}>
      <FiRefreshCw className='scramble-icon'/>
    </button>
  )
}

export default ScrambleButton;