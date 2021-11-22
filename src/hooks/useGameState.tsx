import {useCallback, useState} from 'react';
import {EMPTY, PlayOptions} from '../constants';
import {getStatus} from '../utils/getStatus';
export type Status = 'USER_TURN' | 'AI_TURN' | 'AI_WON' | 'USER_WON' | 'DRAW';

interface State {
  boardState: PlayOptions[];
  status: Status;
}

const initialGameState: Array<PlayOptions> = [
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
const initialStatus: Status = 'USER_TURN';

const initialState: State = {
  boardState: initialGameState,
  status: initialStatus,
};

const useGameState = (): [
  State,
  (boardState: PlayOptions[]) => void,
  () => void,
] => {
  const [playCount, setPlayCount] = useState(0);
  const [gameState, setGameState] = useState<State>(initialState);

  const setBoardState = useCallback(
    (boardState: PlayOptions[]) => {
      const newPlayCount = playCount + 1;
      const newStatus = getStatus(boardState, newPlayCount);
      setPlayCount(newPlayCount);
      setGameState({status: newStatus, boardState});
    },
    [playCount],
  );

  const resetGame = useCallback(() => {
    setGameState(initialState);
    setPlayCount(0);
  }, []);

  return [gameState, setBoardState, resetGame];
};

export default useGameState;
