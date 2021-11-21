import React, {useCallback} from 'react';
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';
import GameBoard from '../../components/gameBoard/GameBoard';
import {useGameState} from '../../components/hooks';
import {EMPTY, PlayOptions, USER} from '../../constants';

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
      populateTile(index, USER);
    },
    [populateTile],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tic Tac Toe</Text>
      <GameBoard boardState={boardState} onPress={onPress} />
      <Button
        title="Play again?"
        onPress={() => {}}
        disabled={
          gameState.status === 'USER_TURN' || gameState.status === 'AI_TURN'
        }
      />
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
