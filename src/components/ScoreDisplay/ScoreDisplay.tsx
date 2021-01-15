import React, { FunctionComponent } from 'react';
import { IScoreInfo } from '../../App';
import './ScoreDisplay.scss';

interface ScoreDisplayProps {
  scoreInfo: IScoreInfo;
}

const ScoreDisplay: FunctionComponent<ScoreDisplayProps> = ({ scoreInfo }) => {
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
