import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import Header from '../header';
import RandomBird from '../random-bird';
import BirdList from '../bird-list';
import Answer from '../answer';
import ButtonNext from '../button-next';

import winAudio from '../../assets/audio/success.mp3';
import errorAudio from '../../assets/audio/error.mp3';

import {
  incrementPage,
  pageRestart,
  removeScore
} from '../../redux/actions';

const App = (props) => {
  const restartGame = () => {
    props.pageRestart();
    props.removeScore();
  }

  if (props.page > 5) {
      return (
        <div className="app">
          <Header /> 
          <div className="jumbotron game-over">
            <h1 className="display-3 text-center">Поздравляем!</h1>
            <p className="lead text-center">Вы прошли викторину и набрали {props.score} из 30 возможных баллов</p>
            <hr className="my-4"/>
              <button className="btn btn-next btn-game-over"
                      onClick={restartGame}>Попробовать еще раз!</button>
          </div>
        </div>
      )    
   }

    return (
      <div className="app">
        <Header />  
        <RandomBird /> 
        <div className="row mb2">
          <div className="col-md-6">            
            <BirdList /> 
          </div>
          <div className="col-md-6">
            <Answer />
          </div>
          <ButtonNext />
        </div> 
        <audio src={winAudio} id="winSound"></audio>
        <audio src={errorAudio} id="errorSound"></audio>    
      </div>
    )

}

const mapStateToProps = (state) => {
  return {
    page: state.page.page,
    score: state.score.score,
  };
};


const mapDispatchToProps = {
  incrementPage,
  pageRestart,
  removeScore
}

export default connect(mapStateToProps, mapDispatchToProps)(App);