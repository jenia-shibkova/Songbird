import React from 'react';
import { connect } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';

import './RandomBird.scss';

import birdImage from '../../assets/image/bird.jpg';
import birdsData from '../../data/birds';

const RandomBird = (props) => {

  return (
    <div className="random-bird jumbotron rounded">
         <img className="bird-image" 
              src={ !props.gameOn ? birdsData[props.page][props.question.id - 1].image : birdImage } 
              alt={ !props.gameOn ? birdsData[props.page][props.question.id - 1].name : 'bird' } />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{!props.gameOn ? birdsData[props.page][props.question.id - 1].name : '******'}</h3>
            </li>
            <li className="list-group-item">
              <ReactAudioPlayer className="audio-player"
                src={birdsData[props.page][props.question.id - 1].audio}
                controls
              />
            </li>
          </ul>
        </div>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    page: state.page.page,
    question: state.question.question,
    gameOn: state.gameOn,
  };
};

export default connect(mapStateToProps, null)(RandomBird);