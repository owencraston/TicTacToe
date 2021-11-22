import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CIRCLE, CROSS, EMPTY} from '../../constants';
import {Status} from '../../hooks/useGameState';

type PlayOptions = typeof CIRCLE | typeof CROSS | typeof EMPTY;

interface Props {
  status: Status;
  onPress: () => void;
}

const Result = ({status, onPress}: Props) => {
  const isGameOver =
    status === 'AI_WON' || status === 'USER_WON' || status === 'DRAW';

  const message = (): string => {
    if (status === 'AI_WON') {
      return 'A.I Won';
    } else if (status === 'USER_WON') {
      return 'Congradulation, You Won!';
    } else if (status === 'DRAW') {
      return "It's a Draw";
    } else if (status === 'USER_TURN') {
      return 'Your turn';
    } else {
      return "Computer's turn";
    }
  };
  return (
    <View style={styles.container}>
      <Text>{message()}</Text>
      {isGameOver && <Button title="Play again?" onPress={onPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Result;
