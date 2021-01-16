import React, { FunctionComponent, useContext } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import StateContext from '../../../utils/StateContext';
import './DeleteButton.scss';

const DeleteButton: FunctionComponent = () => {
  const { setState } = useContext(StateContext);
  
  function handleDelete(e: any) {
    e.preventDefault();
    setState( state => {return{
      ...state,
      chosenLetters: state.chosenLetters.slice(0, state.chosenLetters.length - 1)
    }})
  }

  return (
    <button className="delete-button" onClick={(e) => handleDelete(e)}>
      <HiOutlineTrash className="delete-icon" />
    </button>
  );
};

export default DeleteButton;
