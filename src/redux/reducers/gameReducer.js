import { GAME_STOP, GAME_START } from './types';

const initialState = true;

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_STOP:
      return false;
    case GAME_START:
      return true;
    default:
      return state;
  }
};