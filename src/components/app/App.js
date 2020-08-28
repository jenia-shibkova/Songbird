import React, { Component } from 'react';
import './App.scss';

import Header from '../header';
import RandomBird from '../random-bird';
import QuestionList from '../question-list';
import Answer from '../answer';


export default class App extends Component {
  maxId = 100;

  state = {
    score: 0,
    step: 0,
    win: false,
    select: false,
    id: 0,
    page: 0,
    random: 0 
  } 

  render() {
    const { score } = this.state;

    return (
      <div className="app">
        <Header score={score} />  
        <RandomBird/> 
        <div className="row mb2">
          <div className="col-md-6">            
            <QuestionList /> 
          </div>
          <div className="col-md-6">
            <Answer />
          </div>
          <button class="btn btn-next">Next Level</button>
        </div>       
      </div>
    )
  } 
}