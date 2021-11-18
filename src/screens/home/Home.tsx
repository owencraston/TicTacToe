import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
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
    <SafeAreaView>
      <Text>Tic Tac Toe</Text>
      <GameBoard boardState={boardState} onPress={() => onPress} />
    </SafeAreaView>
  );
};

export default Home;
