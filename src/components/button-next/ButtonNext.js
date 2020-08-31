import React from 'react';
import { connect } from 'react-redux';

import './ButtonNext.scss';

import {
  incrementPage,
  choseBird,
  removeAnswers,
  startGame,
} from '../../redux/actions';

const ButtonNext = (props) => {

  const nextPage = () => {
    props.incrementPage();
    props.removeAnswers();
    props.startGame();
    props.choseBird({});
  };
 
  if (props.gameOn) {
    return (
      <button className="btn">Next Level</button>
    )    
  } else {
    return (
      <button className="btn btn-next"
              onClick={nextPage}>Next Level
      </button>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    question: state.question.question,
    page: state.page.page,
    gameOn: state.gameOn,
  }
}

const mapDispatchToProps = {
  incrementPage,
  choseBird,
  removeAnswers,
  startGame
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext)