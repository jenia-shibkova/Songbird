import React from 'react';
import { connect } from 'react-redux';
import './Answer.scss';
import AudioPlayer from '../audio-player';

function Answer(props) {
  console.log(props)
  return (
      <div className="bird-details card">
        <p className="instruction">
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
        <div className="card-body">
          <img className="bird-image" src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg" alt="Ворон"/>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>Ворон</h4>
            </li>
            <li className="list-group-item">
              <span>Corvus corax</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer />
            </li>
          </ul>
        </div>
        <p className="bird-description">
          Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.
        </p>
      </div>
  )
}  

const mapStateToProps = (state) => {
  return {
    chosenBird: state.chosenBird.chosenBird,
  }
}

export default connect(mapStateToProps, null)(Answer);