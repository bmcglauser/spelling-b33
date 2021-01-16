import React, {
  FunctionComponent,
  useContext
} from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import StateContext from '../../../utils/StateContext';
import './ScrambleButton.scss';


const ScrambleButton: FunctionComponent = () => {
  const { state, setState } = useContext(StateContext);
  const { perimLetters } = state.allLetters;

  function scrambleHandler(e: any) {
    e.preventDefault();
    let arrayToRandomize = [...perimLetters];
    let randomizedArr: string[] = [];
    for (let i = 0; i < 6; i++) {
      let x = Math.floor(Math.random() * (6 - i));
      let el = arrayToRandomize[x];
      arrayToRandomize.splice(x, 1);
      randomizedArr.push(el);
    }
    setState( state => {return {
      ...state,
      allLetters: {
        ...state.allLetters,
        perimLetters: randomizedArr
      }
    }})
  }

  return (
    <button className="scramble-button" onClick={scrambleHandler}>
      <FiRefreshCw className="scramble-icon" />
    </button>
  );
};

export default ScrambleButton;
