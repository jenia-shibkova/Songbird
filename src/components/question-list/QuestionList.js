import React, { Component } from 'react';
import './QuestionList.scss';

export default class QuestionList extends Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item error">
          <span className="li-btn"></span>Ворон
        </li>
        <li className="list-group-item error">
          <span className="li-btn"></span>Журавль
        </li>
        <li className="list-group-item error">
            <span className="li-btn"></span>Ласточка
        </li>
        <li className="list-group-item success">
          <span className="li-btn"></span>Козодой
        </li>
        <li className="list-group-item">
          <span className="li-btn"></span>Кукушка
          </li>
        <li className="list-group-item">
          <span className="li-btn"></span>Синица
        </li>
      </ul>
    )
  } 
}    