import React, { FunctionComponent } from 'react';
import { IScoreInfo } from '../../App';
import './ScoreDisplay.scss';

interface ScoreDisplayProps {
  scoreInfo: IScoreInfo;
}

const ScoreDisplay: FunctionComponent<ScoreDisplayProps> = ({ scoreInfo }) => {
  const { totalPoints, foundWords } = scoreInfo;

  return <div />;
};

export default ScoreDisplay;
