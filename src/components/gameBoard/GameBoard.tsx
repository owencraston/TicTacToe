import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tile from '../tile/Tile';
import {CIRCLE, CROSS, EMPTY} from '../../constants';

type PlayOptions = typeof CIRCLE | typeof CROSS | typeof EMPTY;

interface Props {
  boardState: Array<PlayOptions>;
  onPress: () => void;
}

const GameBoard = ({boardState, onPress}: Props) => {
  const renderRow = (number: number) => {
    const tiles = [];
    for (let i = 0; i < 3; ++i) {
      const index: number = number * 3 + i;

      tiles.push(
        <Tile
          key={i}
          index={index}
          shape={boardState[index]}
          onPress={onPress}
        />,
      );
    }

    return tiles;
  };
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 3; ++i) {
      rows.push(
        <View key={i} style={styles.row}>
          {renderRow(i)}
        </View>,
      );
    }
    return rows;
  };
  return <View style={styles.container}>{renderRows()}</View>;
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameBoard;
