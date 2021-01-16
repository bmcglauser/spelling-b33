import React, {
  FunctionComponent,
  useContext
} from 'react';
import LetterHex from '../LetterHex';
import './Honeycomb.scss';
import StateContext from '../../utils/StateContext';
import HoneycombContext from '../../utils/HoneycombContext';


const Honeycomb: FunctionComponent = () => {
  const { setState, state } = useContext(StateContext);
  const { centerLetter, perimLetters } = state.allLetters;

  function selectLetter(e: any, letter: string) {
    e.preventDefault();
    setState(state => { return{
      ...state,
      messageInfo: {
        ...state.messageInfo,
        displayMessage: false
      },
      chosenLetters: [...state.chosenLetters, letter]
    }
    })
  }

  const k = 70;

  return (
    <HoneycombContext.Provider value={{ selectLetter, scaleFactor: k }}>
      <div className="honeycomb-grand-wrapper">
        <div className="honeycomb-col-a">
          <LetterHex letter={perimLetters[0]} />
          <LetterHex letter={perimLetters[1]} />
        </div>
        <div className="honeycomb-col-b">
          <LetterHex letter={perimLetters[2]} />
          <LetterHex letter={centerLetter} center={true} />
          <LetterHex letter={perimLetters[3]} />
        </div>
        <div className="honeycomb-col-c">
          <LetterHex letter={perimLetters[4]} />
          <LetterHex letter={perimLetters[5]} />
        </div>
      </div>
    </HoneycombContext.Provider>
  );
};

export default Honeycomb;
