import {
  PAGE_INCREMENT,
  PAGE_RESTART,
  APP_CHOSE_BIRD,
  APP_ADD_ATTEMPTS,
  APP_ADD_SCORE,
  APP_REMOVE_ATTEMPTS,
  APP_REMOVE_SCORE,
  APP_CORRECT_ANSWER,
  APP_INCORRECT_ANSWER,
  APP_REMOVE_ANSWERS,
  GAME_STOP,
  GAME_START
} from './reducers/types';

export function choseBird(bird) {
  return {
    type: APP_CHOSE_BIRD,
    payload: bird,
  }
}

export function incrementPage() {
  return {
    type: PAGE_INCREMENT,
  }
}

export function pageRestart() {
  return {
    type: PAGE_RESTART,
  }
}

export function chosenCorrectBird() {
  return {
    type: APP_CHOSEN_CORRECT_BIRD,
  }
}

export function addScore(attempts) {
  return {
    type: APP_ADD_SCORE,
    payload: attempts,
  }
}

export function addAttempts() {
  return {
    type: APP_ADD_ATTEMPTS,
  }
}

export function removeScore() {
  return {
    type: APP_REMOVE_SCORE,
  }
}

export function removeAttempts() {
  return {
    type: APP_REMOVE_ATTEMPTS,
  }
}

export function correctAnswer(id) {
  return {
    type: APP_CORRECT_ANSWER,
    payload: id,
  }
}

export function incorrectAnswer(id) {
  return {
    type: APP_INCORRECT_ANSWER,
    payload: id,
  }
}

export function removeAnswers() {
  return {
    type: APP_REMOVE_ANSWERS,
  }
}

export function stopGame() {
  return {
    type: GAME_STOP,
  }
}

export function startGame() {
  return {
    type: GAME_START,
  }
}