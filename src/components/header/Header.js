import React from 'react';
import './Header.scss';

const Header = ({ score }) => {
  return (
    <header className="header d-flex">
      <div className="top-panel d-flex">
        <h1>Songbird</h1>
        <h5 className="score">score: {score} </h5>
      </div>

      <ul className="pagination">
        <li className="page-item active">
          <a className="page-link" href="/#">Разминка</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Воробьиные</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Лесные птицы</a>
        </li><li className="page-item">
          <a className="page-link" href="/#">Певчие птицы</a>
        </li><li className="page-item">
          <a className="page-link" href="/#">Хищные птицы</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/#">Морские птицы</a>
        </li>
      </ul>           
    </header>
  );
};

export default Header;