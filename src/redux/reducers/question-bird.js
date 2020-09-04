import { ADD_QUESTION_BIRD, CHOSEN_CORRECT_BIRD } from './types';
import birdsData from '../../data/birds';

const initialState = {
    question: {
    ...birdsData[0][Math.floor(0 + Math.random() * 5)],
    win: false,
  },
};

export const questionBirdReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION_BIRD:
      return {
        question: {
          ...birdsData[action.payload][Math.floor(0 + Math.random() * 5)],
          win: false,
        },
      };

    case CHOSEN_CORRECT_BIRD:
      return {
        question: { ...state.question, win: true },
      };

    default:
      return state;
  }
};
