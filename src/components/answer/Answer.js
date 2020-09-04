import React from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

import './Answer.scss';

const Answer = (props) => {

  if (Object.keys(props.chosenBird).length === 0) {    
    return (
      <div className="bird-details card">
        <p className="instruction">
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>        
      </div>
    )
  } else {
    return (
      <div className="bird-details card">
        <div className="card-body">
          <img className="bird-image" src={props.chosenBird.image} alt="Ворон"/>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{props.chosenBird.name}</h4>
              </li>
              <li className="list-group-item">
                <span>{props.chosenBird.species}</span>
              </li>
              <li className="list-group-item">
                <ReactAudioPlayer className="audio-player"
                  src={props.chosenBird.audio}
                  controls
                />
              </li>
            </ul>
          </div>
          <p className="bird-description">{props.chosenBird.description}</p>   
      </div>
    )
  }
}  

const mapStateToProps = (state) => {
  return {
    chosenBird: state.chosenBird.chosenBird,
    gameOn: state.gameOn,
    question: state.question.question,
  }
}

export default connect(mapStateToProps, null)(Answer);