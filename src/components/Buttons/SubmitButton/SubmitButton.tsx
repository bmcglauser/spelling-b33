import React, {
  FunctionComponent,
  useContext,
} from 'react';
import { BsArrowUp } from 'react-icons/bs';
import './SubmitButton.scss';
import StateContext from '../../../utils/StateContext';
import checkWord from 'check-if-word';

const words = checkWord('en');

const SubmitButton: FunctionComponent = () => {
  const { setState, state } = useContext(
    StateContext
  );
  const { chosenLetters, allLetters } = state;
  const { centerLetter } = allLetters;

  function handleSubmit(e: any) {
    e.preventDefault();
    let centerPresent = false;
    for (let letter of chosenLetters) {
      if (letter === centerLetter) centerPresent = true;
    }
    if (!chosenLetters.length || chosenLetters.length < 4) {
      setState(state=> {return {
        ...state,
        messageInfo: {
          ...state.messageInfo,
          displayMessage: true,
          type: 'tooshort'
        }
      }})
    } else if (!centerPresent) {
      setState(state=> {return {
        ...state,
        messageInfo: {
          ...state.messageInfo,
          displayMessage: true,
          type: 'centerrequired'
        }
      }})
    } else if (words.check(chosenLetters.join(''))) {
      let pointsToAdd = chosenLetters.length === 4 ? 1 : chosenLetters.length;
      setState(state=> {return {
        ...state,
        messageInfo: {
          displayMessage: true,
          type: 'goodword',
          recentPoints: pointsToAdd
        },
        scoreInfo: {
          foundWords: [...state.scoreInfo.foundWords, chosenLetters.join('')],
          totalPoints: state.scoreInfo.totalPoints + pointsToAdd
        }
      }})
    } else {
      setState(state=> {return {
        ...state,
        messageInfo: {
          ...state.messageInfo,
          displayMessage: true,
          type: 'notaword'
        }
      }})
    }
    setState(state=> {return {
      ...state,
      chosenLetters: []
    }})
  }

  return (
    <button className="submit-button" onClick={(e) => handleSubmit(e)}>
      <BsArrowUp className="submit-icon" />
    </button>
  );
};

export default SubmitButton;
