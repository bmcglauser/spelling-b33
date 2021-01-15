import React, { FunctionComponent, useContext, Dispatch, SetStateAction } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import './SubmitButton.scss';
import LettersContext from '../../../utils/LettersContext';
import checkWord from 'check-if-word';
import { IMessageInfo } from '../../../App';

const words = checkWord('en');

interface SubmitButtonProps {
  centerLetter: string;
  setPoints: Dispatch<SetStateAction<number>>;
  setMessageInfo: Dispatch<SetStateAction<IMessageInfo>>;
}

const SubmitButton: FunctionComponent<SubmitButtonProps> = ({centerLetter, setPoints, setMessageInfo}) => {
  const {setChosenLetters, chosenLetters} = useContext(LettersContext);

  function handleSubmit (e: any) {
    e.preventDefault();
    let centerPresent = false;
    for (let letter of chosenLetters) {
      if (letter === centerLetter) centerPresent = true;
    }
    if (!chosenLetters.length || chosenLetters.length < 4) {
      console.log('Must contain at least four letters');
      setMessageInfo(info => {return {
        ...info,
        displayMessage: true,
        type: 'tooshort'
      }});
    } else if (!centerPresent) {
      console.log('No center letter 😞 Must contain ', centerLetter);
      setMessageInfo(info => {return {
        ...info,
        displayMessage: true,
        type: 'centerrequired'
      }});
    } else if (words.check(chosenLetters.join(''))) {
      console.log('Yes, a word!', chosenLetters.join(''))
      let pointsToAdd = chosenLetters.length === 4 ? 1 : chosenLetters.length;
      console.log(`adding ${pointsToAdd} points`);
      setMessageInfo(info => {return {
        ...info,
        displayMessage: true,
        type: 'goodword',
        recentPoints: pointsToAdd
      }});
      setPoints(p => p + pointsToAdd);
    } else {
      console.log('No, not a word!', chosenLetters.join(''))
      setMessageInfo(info => {return {
        ...info,
        displayMessage: true,
        type: 'notaword',
      }});
    }
    setChosenLetters((letters: string[]) => []);
  }
  
  return (
    <button className='submit-button' onClick={e=>handleSubmit(e)}>
      <BsArrowUp className='submit-icon'/>
    </button>
  )
}

export default SubmitButton;
