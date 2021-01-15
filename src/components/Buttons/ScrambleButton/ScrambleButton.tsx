import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext
} from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { IAllLetters } from '../../../App';
import LettersContext from '../../../utils/LettersContext';
import './ScrambleButton.scss';

interface ScrambleButtonProps {
  setAllLetters: Dispatch<SetStateAction<IAllLetters>>;
}

const ScrambleButton: FunctionComponent<ScrambleButtonProps> = ({
  setAllLetters
}) => {
  const { perimLetters } = useContext(LettersContext).allLetters;
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
    setAllLetters((lettersObj) => {
      return {
        ...lettersObj,
        perimLetters: randomizedArr
      };
    });
  }

  return (
    <button className="scramble-button" onClick={scrambleHandler}>
      <FiRefreshCw className="scramble-icon" />
    </button>
  );
};

export default ScrambleButton;
