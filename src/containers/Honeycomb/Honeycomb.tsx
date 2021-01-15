import React, { FunctionComponent, useContext } from 'react';
import LetterHex from '../../components/LetterHex';
import './Honeycomb.scss';
import ChosenLettersContext from '../../utils/ChosenLettersContext';
import SelectLetterContext from '../../utils/SelectLetterContext';

interface HoneycombProps {
  centerLetter: string;
}

const Honeycomb: FunctionComponent<HoneycombProps> = ({ centerLetter }) => {
  const { setChosenLetters, availLetters } = useContext(ChosenLettersContext);

  function selectLetter(e: any, letter: string) {
    e.preventDefault();
    setChosenLetters((letters: string[]) => [...letters, letter]);
  }

  const k = 70;

  return (
    <SelectLetterContext.Provider value={{ selectLetter }}>
      <div className="honeycomb-grand-wrapper">
        <div className="honeycomb-col-a">
          <LetterHex scalar={k} letter={availLetters[0]} />
          <LetterHex scalar={k} letter={availLetters[1]} />
        </div>
        <div className="honeycomb-col-b">
          <LetterHex scalar={k} letter={availLetters[2]} />
          <LetterHex scalar={k} letter={centerLetter} center={true} />
          <LetterHex scalar={k} letter={availLetters[3]} />
        </div>
        <div className="honeycomb-col-c">
          <LetterHex scalar={k} letter={availLetters[4]} />
          <LetterHex scalar={k} letter={availLetters[5]} />
        </div>
      </div>
    </SelectLetterContext.Provider>
  );
};

export default Honeycomb;
