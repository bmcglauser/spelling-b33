import React, { FunctionComponent, useContext } from 'react';
import StateContext from '../../utils/StateContext';
import './ScoreDisplay.scss';


const ScoreDisplay: FunctionComponent = () => {
  const { scoreInfo } = useContext(StateContext).state;
  const { totalPoints, foundWords } = scoreInfo;

  return (
    <div className="score-display-grand-wrapper">
      <span className="total-points">
        <p>Score:</p>
        <h2>{totalPoints}</h2>
      </span>
      <ul className="found-words">
        {foundWords.map(word => {
          return <li>{word}</li>
        })}
      </ul>
    </div>
  )
};

export default ScoreDisplay;
