import React, { FunctionComponent, useContext } from 'react';

import './LetterDisplay.scss';
import ChosenLettersContext from '../../utils/ChosenLettersContext';

const LetterDisplay: FunctionComponent = () => {
  const { chosenLetters } = useContext(ChosenLettersContext);

  return <h2>{chosenLetters.join('')}</h2>;
};

export default LetterDisplay;
