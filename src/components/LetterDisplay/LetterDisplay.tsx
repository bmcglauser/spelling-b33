import React, { FunctionComponent, useContext } from 'react';

import './LetterDisplay.scss';
import StateContext from '../../utils/StateContext';

const LetterDisplay: FunctionComponent = () => {
  const { chosenLetters } = useContext(StateContext).state;
  return <h2 className="letter-display">{chosenLetters.join('')}</h2>;
};

export default LetterDisplay;
