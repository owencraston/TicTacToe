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

const isDraw = (board: PlayOptions[]): boolean => {
  return !board.some(figure => figure === EMPTY);
};

export const getStatus = (board: PlayOptions[]): Status => {
  if (isDraw(board)) {
    return 'DRAW';
  } else {
    let result: Status = 'PLAYING';
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
        result = 'PLAYING';
        break;
      case AI:
        result = 'AI_WON';
        break;
      case USER:
        result = 'USER_WON';
    }
    return result;
  }
};
