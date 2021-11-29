import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Tile from '../tile/Tile';
import {CIRCLE, CROSS, EMPTY} from '../../constants';

type PlayOptions = typeof CIRCLE | typeof CROSS | typeof EMPTY;

interface Props {
  boardState: Array<PlayOptions>;
  onPress: (index: number) => void;
}

const GameBoard = ({boardState, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Tile key={0} index={0} shape={boardState[0]} onPress={onPress} />
        <Tile key={1} index={1} shape={boardState[1]} onPress={onPress} />
        <Tile key={2} index={2} shape={boardState[2]} onPress={onPress} />
      </View>
      <View style={styles.row}>
        <Tile key={3} index={3} shape={boardState[3]} onPress={onPress} />
        <Tile key={4} index={4} shape={boardState[4]} onPress={onPress} />
        <Tile key={5} index={5} shape={boardState[5]} onPress={onPress} />
      </View>
      <View style={styles.row}>
        <Tile key={6} index={6} shape={boardState[6]} onPress={onPress} />
        <Tile key={7} index={7} shape={boardState[7]} onPress={onPress} />
        <Tile key={8} index={8} shape={boardState[8]} onPress={onPress} />
      </View>
    </View>
  );
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
