import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  // removeScore,
  addAttempts,
  addScore,
  correctAnswer,
  incorrectAnswer,
  stopGame
} from '../../redux/actions';

import winSound from '../../assets/audio/win.mp3';
import errorSound from '../../assets/audio/error.mp3';
import birdsData from '../../data/birds';

function BirdListItem(props) {

  
  const checkBird = (event) => {
     
  props.choseBird({
    ...birdsData[props.page].find(
      (bird) => bird.name === props.name
    )
  });

console.log(props.score)
    if (props.gameOn) { 
      const currentBirdId = Number(event.target.id);
      // console.log(currentBirdId)
      // console.log(props.question.id)

      if (currentBirdId === 1) {
        console.log(props)
      }

      if (currentBirdId === props.question.id) {
console.log('correct')
     //   getCorrectSound()
        props.addScore(props.attempts)
      //   props.chosenCorrectBird()
        props.correctAnswer(props.id)
        props.stopGame();
        props.removeAttempts();               
      } else {
        console.log('no')
      //   getIncorrectSound()
        props.addAttempts()
        props.incorrectAnswer(props.id)
      }
    }    
  }
 
  
  const switchItemClass = (props) => {
    const id = props.answersResult[props.id];

    switch (id) {
      case true:
        return {'li-btn': true, 'error': false, 'success': true};
      case false:
        return {'li-btn': true, 'error': true, 'success': false};

      default: 
        return {'li-btn': true, 'error': false, 'success': false};
    }  
  }
 
  return (
    <li id={props.id} className="list-group-item" onClick={checkBird}>    
      <span className={classNames(switchItemClass(props))}></span>{props.name}
    </li>
  )
};

const mapStateToProps = (state) => {
  return {
    page: state.page.page,
    question: state.question.question,
    gameOn: state.gameOn,


    // currentRound: state.round.round,
    // unknownBird: state.unknownBird.unknownBird,
    attempts: state.score.attempts,
    answersResult: state.answersResult.answersResult,
  }
}

const mapDispatchToProps = {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  // removeScore,
  addAttempts,
  addScore,
  correctAnswer,
  incorrectAnswer,
  stopGame
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdListItem);