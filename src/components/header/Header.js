import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';

class Header extends Component {

  state = {
    navItems: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
  }

  getElements = (page) => {
    const { navItems } = this.state;

    return navItems.map((item, index) => {    
      let className = 'page-item';
  
      if (index === page) {
        className += ' active';
      }
  
      return (
        <li key={index} className={className}>
          <a className="page-link" href="/#">{item}</a>
        </li>
      )
    });
  };

  render() {
    const { score, page } = this.props;

    return (
      <header className="header d-flex">
        <div className="top-panel d-flex">
          <h1>Songbird</h1>
          <h5 className="score">score: {score} </h5>
        </div>
  
        <ul className="pagination">
          { this.getElements(page) }
        </ul>           
      </header>
    )
  } 
}

const mapStateToProps = (state) => {
  return {
    score: state.score.score,
    page: state.page.page,
  }
}

export default connect(mapStateToProps, null)(Header);