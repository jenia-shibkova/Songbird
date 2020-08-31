import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  addAttempts,
  addScore,
  correctAnswer,
  incorrectAnswer,
  stopGame
} from '../../redux/actions';

import birdsData from '../../data/birds';

const BirdListItem = (props) => {
 
  const checkBird = (event) => {     
    props.choseBird({
      ...birdsData[props.page].find(
        (bird) => bird.name === props.name
      )
    });

    if (props.gameOn) { 
      const currentBirdId = Number(event.target.id);

      if (currentBirdId === props.question.id) {
        getCorrectSound();
        props.addScore(props.attempts)
        props.correctAnswer(props.id)
        props.stopGame();
        props.removeAttempts();               
      } else {
        getIncorrectSound();
        props.addAttempts()
        props.incorrectAnswer(props.id)
      }
    }    
  }

  const getSound = (win) => {
    const winAudio = document.getElementById('winSound');
    const errorAudio = document.getElementById('errorSound');

    if(win) {
      winAudio.currentTime = 0;
      winAudio.play();
    } else {
      errorAudio.currentTime = 0;
      errorAudio.play();
    }
  }
  
  const getCorrectSound = () => {
    const winAudio = document.getElementById('winSound');
    winAudio.currentTime = 0;
    winAudio.play();
  }

  const getIncorrectSound = () => {
    const errorAudio = document.getElementById('errorSound');
    errorAudio.currentTime = 0;
    errorAudio.play();
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
    attempts: state.score.attempts,
    answersResult: state.answersResult.answersResult,
  }
}

const mapDispatchToProps = {
  choseBird,
  chosenCorrectBird,
  removeAttempts,
  addAttempts,
  addScore,
  correctAnswer,
  incorrectAnswer,
  stopGame
}

export default connect(mapStateToProps, mapDispatchToProps)(BirdListItem);