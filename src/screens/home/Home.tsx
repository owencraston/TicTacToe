import React, {useCallback} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import GameBoard from '../../components/gameBoard/GameBoard';
import {AI, EMPTY, PADDING, PlayOptions, USER} from '../../constants';
import {getNextAIMove} from '../../engine/getNextAIMove';
import {useGameState} from '../../hooks';

const Home = () => {
  const [gameState, setBoardState] = useGameState();
  const boardState: PlayOptions[] = gameState.boardState;

  const populateTile = useCallback(
    (index: number, figure: PlayOptions) => {
      if (boardState[index] !== EMPTY) {
        console.log('Someone has already played here');
        return;
      }
      const board: Array<PlayOptions> = boardState;
      board[index] = figure;
      setBoardState(board);
    },
    [boardState, setBoardState],
  );

  const onPress = useCallback(
    (index: number) => {
      // users move
      populateTile(index, USER);
      // ai's move
      const play = getNextAIMove(boardState);
      populateTile(play, AI);
    },
    [boardState, populateTile],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <GameBoard boardState={boardState} onPress={onPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    padding: PADDING,
  },
});

export default Home;
