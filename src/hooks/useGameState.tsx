import {useCallback, useState} from 'react';
import {EMPTY, PlayOptions} from '../constants';
import {getStatus} from '../utils/getStatus';
export type Status = 'PLAYING' | 'AI_WON' | 'USER_WON' | 'DRAW';

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
const initialStatus: Status = 'PLAYING';

const initialState: State = {
  boardState: initialGameState,
  status: initialStatus,
};

const useGameState = (): [State, (boardState: PlayOptions[]) => void] => {
  const [gameState, setGameState] = useState<State>(initialState);

  const setBoardState = useCallback((boardState: PlayOptions[]) => {
    const newStatus = getStatus(boardState);
    setGameState({status: newStatus, boardState});
  }, []);

  return [gameState, setBoardState];
};

export default useGameState;
