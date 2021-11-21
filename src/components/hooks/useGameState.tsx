import {useCallback, useState} from 'react';
import {EMPTY, PlayOptions} from '../../constants';

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

const useGameState = (): [State, (boardState: PlayOptions[]) => void] => {
  const [gameState, setGameState] = useState<State>(initialState);

  const setBoardState = useCallback((boardState: PlayOptions[]) => {
    setGameState({status: initialStatus, boardState});
  }, []);

  return [gameState, setBoardState];
};

export default useGameState;
