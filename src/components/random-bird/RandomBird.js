import React, { Component } from 'react';
import './RandomBird.scss';

export default class RandomBird extends Component {
  
  render() {
    return (
      <div className="random-bird jumbotron rounded">
        <img className="bird-image" src="https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg" alt="Козодой" />
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Козодой</h3>
            </li>
            <li className="list-group-item">
              <div className="audio-player">
                <audio src="/static/media/win.a1e9e8b6.mp3" hidden=""></audio>
                <div className="controls">
                  <div className="playback-button">
                    <svg viewBox="-200 0 1200 1000"><path fill="#00bc8c" d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"></path></svg>
                  </div>
                  <div className="timebar">
                    <div className="timebar-bar"></div>
                    <div className="timebar-circle"></div>
                    <div className="timebar-time-info">
                      <div>00:00</div>
                      <div>00:06</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  } 
}