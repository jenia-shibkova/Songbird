import { combineReducers } from 'redux';
import { chooseBirdReducer } from './choose-bird-reducer';
import { pageReducer } from './page-reducer';
import { questionBirdReducer } from './question-bird';
import { answersReducer } from './answersReducer'
import { gameReducer } from './gameReducer';
import { scoreReducer } from './scoreReducer';

export const reducer = combineReducers( {
    page: pageReducer,
    chosenBird: chooseBirdReducer,
    question: questionBirdReducer,
    score: scoreReducer,
    answersResult: answersReducer,
    gameOn: gameReducer
  } 
);