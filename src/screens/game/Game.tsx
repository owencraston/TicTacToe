import React, {useCallback, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import GameBoard from '../../components/gameBoard/GameBoard';
import {Result} from '../../components/result';
import {AI, EMPTY, PADDING, PlayOptions, USER} from '../../constants';
import {getNextAIMove} from '../../engine/getNextAIMove';
import {useGameState} from '../../hooks';

const Game = () => {
  const [gameState, setBoardState, resetGame] = useGameState();
  const boardState: PlayOptions[] = gameState.boardState;

  const populateTile = useCallback(
    (index: number, figure: PlayOptions) => {
      if (boardState[index] !== EMPTY) {
        console.log('Someone has already played here');
        return;
      }
      const board: Array<PlayOptions> = [...boardState];
      board[index] = figure;
      setBoardState(board);
    },
    [boardState, setBoardState],
  );

  const aiPlay = useCallback(() => {
    const play = getNextAIMove(boardState);
    populateTile(play, AI);
  }, [boardState, populateTile]);

  const onPress = useCallback(
    (index: number) => {
      // users move
      populateTile(index, USER);
    },
    [populateTile],
  );

  useEffect(() => {
    if (gameState.status === 'AI_TURN') {
      aiPlay();
    }
  }, [aiPlay, gameState.status]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <GameBoard boardState={boardState} onPress={onPress} />
      <Result status={gameState.status} onPress={resetGame} />
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

export default Game;
