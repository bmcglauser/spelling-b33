import React, {
  FunctionComponent,
  useContext,
  Dispatch,
  SetStateAction
} from 'react';
import { BsArrowUp } from 'react-icons/bs';
import './SubmitButton.scss';
import LettersContext from '../../../utils/LettersContext';
import checkWord from 'check-if-word';
import { IMessageInfo, IScoreInfo } from '../../../App';

const words = checkWord('en');

interface SubmitButtonProps {
  setScoreInfo: Dispatch<SetStateAction<IScoreInfo>>;
  setMessageInfo: Dispatch<SetStateAction<IMessageInfo>>;
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
  setScoreInfo,
  setMessageInfo
}) => {
  const { setChosenLetters, chosenLetters, allLetters } = useContext(
    LettersContext
  );
  const { centerLetter } = allLetters;

  function handleSubmit(e: any) {
    e.preventDefault();
    let centerPresent = false;
    for (let letter of chosenLetters) {
      if (letter === centerLetter) centerPresent = true;
    }
    if (!chosenLetters.length || chosenLetters.length < 4) {
      setMessageInfo((info) => {
        return {
          ...info,
          displayMessage: true,
          type: 'tooshort'
        };
      });
    } else if (!centerPresent) {
      setMessageInfo((info) => {
        return {
          ...info,
          displayMessage: true,
          type: 'centerrequired'
        };
      });
    } else if (words.check(chosenLetters.join(''))) {
      let pointsToAdd = chosenLetters.length === 4 ? 1 : chosenLetters.length;
      setMessageInfo((info) => {
        return {
          displayMessage: true,
          type: 'goodword',
          recentPoints: pointsToAdd
        };
      });
      setScoreInfo((info) => {
        return {
          foundWords: [...info.foundWords, chosenLetters.join('')],
          totalPoints: info.totalPoints + pointsToAdd
        };
      });
    } else {
      setMessageInfo((info) => {
        return {
          ...info,
          displayMessage: true,
          type: 'notaword'
        };
      });
    }
    setChosenLetters((letters: string[]) => []);
  }

  return (
    <button className="submit-button" onClick={(e) => handleSubmit(e)}>
      <BsArrowUp className="submit-icon" />
    </button>
  );
};

export default SubmitButton;
