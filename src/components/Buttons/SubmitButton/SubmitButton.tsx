import React, { FunctionComponent, useContext } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import './SubmitButton.scss';
import ChosenLettersContext from '../../../utils/ChosenLettersContext';


const SubmitButton: FunctionComponent = () => {
  const {setChosenLetters} = useContext(ChosenLettersContext);

  function handleSubmit (e: any) {
    e.preventDefault();
    setChosenLetters((letters: string[]) => []);
  }
  
  return (
    <button className='submit-button' onClick={e=>handleSubmit(e)}>
      <BsArrowUp className='submit-icon'/>
    </button>
  )
}

export default SubmitButton;
