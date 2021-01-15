import React, { FunctionComponent, useContext } from 'react';

import './LetterDisplay.scss';
import LettersContext from '../../utils/LettersContext';

const LetterDisplay: FunctionComponent = () => {
  const { chosenLetters } = useContext(LettersContext);

  return <h2 className="letter-display">{chosenLetters.join('')}</h2>;
};

export default LetterDisplay;
