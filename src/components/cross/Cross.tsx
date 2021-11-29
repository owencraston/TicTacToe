import React from 'react';
import {Svg, Line, Color} from 'react-native-svg';
import {SIZE, WIDTH, PADDING} from '../../constants';

interface Props {
  colour: Color;
}

const Cross = () => (
  <Svg height={SIZE} width={SIZE}>
    <Line
      x1={PADDING}
      y1={SIZE - PADDING}
      x2={SIZE - PADDING}
      y2={PADDING}
      stroke={'black'}
      strokeWidth={WIDTH}
    />
    <Line
      x1={PADDING}
      y1={PADDING}
      x2={SIZE - PADDING}
      y2={SIZE - PADDING}
      stroke={'black'}
      strokeWidth={WIDTH}
    />
  </Svg>
);

export default Cross;
