import React, { FunctionComponent, useContext } from 'react';
import './LetterHex.scss';
import SelectLetterContext from '../../utils/SelectLetterContext';

interface LetterHexProps {
  scalar: number;
  center?: boolean;
  letter: string;
}

const LetterHex: FunctionComponent<LetterHexProps> = ({
  scalar,
  center,
  letter
}) => {
  const { selectLetter } = useContext(SelectLetterContext);
  const k = scalar;
  const width = 2 * k;
  const heightConst = Math.sqrt(3) * k;
  const margin = (width - heightConst) / 2;
  const heightCoord = heightConst + margin;

  return (
    <div className="hex-grand-wrapper">
      <svg height={heightCoord} width={width}>
        <polygon
          className={center ? 'centerHex' : ''}
          points={`0,${heightCoord / 2} ${width / 4},0 ${
            (3 * width) / 4
          },0 ${width},${heightCoord / 2} ${(3 * width) / 4},${heightCoord} ${
            (1 * width) / 4
          },${heightCoord}`}
          stroke="black"
          onClick={(e) => {
            selectLetter(e, letter);
          }}
        ></polygon>
      </svg>
      <p>{letter}</p>
    </div>
  );
};

export default LetterHex;
