import {EMPTY, PlayOptions} from '../constants';

export const getNextAIMove = (board: PlayOptions[]): number => {
  // random AI
  const options = board
    .map((value, index) => ({value, index}))
    .filter(tile => tile.value === EMPTY);
  const random = Math.floor(Math.random() * options.length);
  return options[random].index;
};
