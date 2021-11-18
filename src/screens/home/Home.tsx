import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import GameBoard from '../../components/gameBoard/GameBoard';
import {EMPTY, PlayOptions, USER, AI} from '../../constants';

const Home = () => {
  const initialState: Array<PlayOptions> = [
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ];

  function populateTile(index: number, figure: PlayOptions) {
    if (boardState[index] !== EMPTY) {
      console.log('Someone has already played here');
      return;
    }
    const board = boardState;
    board[index] = figure;
    setBoardState(board);
  }

  const AIPlay = () => {
    populateTile(1, AI);
  };

  const [boardState, setBoardState] =
    useState<Array<PlayOptions>>(initialState);

  const onPress = (index: number) => {
    populateTile(index, USER);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <GameBoard boardState={boardState} onPress={() => onPress} />
      <Button title="Play again?" onPress={() => {}} disabled={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
