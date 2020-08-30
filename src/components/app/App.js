import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import Header from '../header';
import RandomBird from '../random-bird';
import BirdList from '../bird-list';
import Answer from '../answer';
import ButtonNext from '../button-next';
import winAudio from '../../assets/audio/win.mp3';
import errorAudio from '../../assets/audio/error.mp3';


function App(props) {

     if (props.page > 5) {
      return (
        <div className="app">
          <p>Game over</p>
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
      </div>
    )

}

const mapStateToProps = (state) => {
  return {
    page: state.page.page,
  };
};

export default connect(mapStateToProps, null)(App);