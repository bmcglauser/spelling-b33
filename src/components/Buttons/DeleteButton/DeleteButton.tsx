import React, { FunctionComponent, useContext } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import ChosenLettersContext from '../../../utils/ChosenLettersContext';
import './DeleteButton.scss';

const DeleteButton: FunctionComponent = () => {
  const { setChosenLetters } = useContext(ChosenLettersContext);

  function handleDelete(e: any) {
    e.preventDefault();
    setChosenLetters((letters: string[]) =>
      letters.slice(0, letters.length - 1)
    );
  }

  return (
    <button className="delete-button" onClick={(e) => handleDelete(e)}>
      <HiOutlineTrash className="delete-icon" />
    </button>
  );
};

export default DeleteButton;
