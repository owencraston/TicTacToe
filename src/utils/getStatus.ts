import {AI, EMPTY, PlayOptions, USER} from '../constants';
import {Status} from '../hooks/useGameState';

const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const tileContainsFigure = (
  board: PlayOptions[],
  index: number,
  figure: PlayOptions,
): boolean => {
  return board[index] === figure && board[index] !== EMPTY;
};

const isDraw = (playCount: number): boolean => {
  return playCount === 9;
};

const whosTurn = (playCount: number): 'USER_TURN' | 'AI_TURN' => {
  return playCount % 2 === 0 ? 'USER_TURN' : 'AI_TURN';
};

const whoWins = (board: PlayOptions[]): 'AI_WON' | 'USER_WON' | null => {
  let result: 'AI_WON' | 'USER_WON' | null = null;
  let winner: PlayOptions | null = null;
  for (let i = 0; i < winStates.length; ++i) {
    let figure = board[winStates[i][0]];
    if (winStates[i].every(tile => tileContainsFigure(board, tile, figure))) {
      winner = figure;
      break;
    }
  }
  switch (winner) {
    case null:
      result = null;
      break;
    case AI:
      result = 'AI_WON';
      break;
    case USER:
      result = 'USER_WON';
  }
  return result;
};

export const getStatus = (board: PlayOptions[], playCount: number): Status => {
  if (playCount > 5) {
    const winner = whoWins(board);
    if (winner) {
      return winner;
    } else if (isDraw(playCount)) {
      return 'DRAW';
    } else {
      return whosTurn(playCount);
    }
  } else {
    return whosTurn(playCount);
  }
};
