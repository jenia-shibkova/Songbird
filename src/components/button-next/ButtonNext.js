import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './ButtonNext.scss';

import {
  incrementRound,
  addUnknownBird,
  choseBird,
  removeAnswers,
  startGame,
} from '../../redux/actions';

function ButtonNext(props) {

  const nextRound = () => {
    
    console.log(props.choseBird)
    console.log('button click')
    if (props.round < 5) return;
    props.incrementRound();
    props.removeAnswers();
    props.startGame();
  };
 
  if (props.gameOn) {
    return (
      <button className="btn">Next Level</button>
    )    
  } else {
    return (
      <button className="btn btn-next"
              onClick={nextRound}>Next Level
      </button>
    )
  } 
//   const nextRound = () => {
//     props.incrementRound()
//     props.choseBird({})
//     if (props.round < 5) props.addUnknownBird(props.round + 1)
//     props.removeAnswers()
//   }

//   if (props.unknownBird.completed) {
//     return (
//       <div className={classes.wrapper}>
//         <button className={classes.show} onClick={nextRound}>
//           Следующий вопрос
//         </button>
//       </div>
//     )
//   } else {
//     return (
//       <div className={classes.wrapper}>
//         <button className={classes.hide}>Следующий вопрос</button>
//       </div>
//     )
//   }
}

const mapStateToProps = (state) => {
  return {
    question: state.question.question,
    page: state.page.page,
    gameOn: state.gameOn,
  }
}

const mapDispatchToProps = {
  incrementRound,
  addUnknownBird,
  choseBird,
  removeAnswers,
  startGame
}

//export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext)
export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext)