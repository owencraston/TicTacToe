import React from 'react';
import {Svg, Circle as C, Color} from 'react-native-svg';
import {SIZE, WIDTH, PADDING} from '../../constants';

interface Props {
  colour: Color;
}

const Circle = () => (
  <Svg height={SIZE} width={SIZE}>
    <C
      cx={SIZE / 2}
      cy={SIZE / 2}
      r={(SIZE - 2 * PADDING) / 2}
      stroke={'black'}
      strokeWidth={WIDTH}
      fill="transparent"
    />
  </Svg>
);

export default React.memo(Circle);
