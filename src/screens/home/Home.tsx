import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import GameBoard from '../../components/gameBoard/GameBoard';
import {EMPTY, PlayOptions} from '../../constants';

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

  const [boardState] = useState<Array<PlayOptions>>(initialState);
  return (
    <SafeAreaView>
      <Text>Tic Tac Toe</Text>
      <GameBoard boardState={boardState} onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Home;
