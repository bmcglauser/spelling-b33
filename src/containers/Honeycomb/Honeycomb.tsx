import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext
} from 'react';
import LetterHex from '../../components/LetterHex';
import './Honeycomb.scss';
import LettersContext from '../../utils/LettersContext';
import SelectLetterContext from '../../utils/SelectLetterContext';
import { IMessageInfo } from '../../App';

interface HoneycombProps {
  setMessageInfo: Dispatch<SetStateAction<IMessageInfo>>;
}

const Honeycomb: FunctionComponent<HoneycombProps> = ({ setMessageInfo }) => {
  const { setChosenLetters, allLetters } = useContext(LettersContext);
  const { centerLetter, perimLetters } = allLetters;

  function selectLetter(e: any, letter: string) {
    e.preventDefault();
    setMessageInfo((info) => {
      return {
        ...info,
        displayMessage: false
      };
    });
    setChosenLetters((letters: string[]) => [...letters, letter]);
  }

  const k = 70;

  return (
    <SelectLetterContext.Provider value={{ selectLetter }}>
      <div className="honeycomb-grand-wrapper">
        <div className="honeycomb-col-a">
          <LetterHex scalar={k} letter={perimLetters[0]} />
          <LetterHex scalar={k} letter={perimLetters[1]} />
        </div>
        <div className="honeycomb-col-b">
          <LetterHex scalar={k} letter={perimLetters[2]} />
          <LetterHex scalar={k} letter={centerLetter} center={true} />
          <LetterHex scalar={k} letter={perimLetters[3]} />
        </div>
        <div className="honeycomb-col-c">
          <LetterHex scalar={k} letter={perimLetters[4]} />
          <LetterHex scalar={k} letter={perimLetters[5]} />
        </div>
      </div>
    </SelectLetterContext.Provider>
  );
};

export default Honeycomb;
