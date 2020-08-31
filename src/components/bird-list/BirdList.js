import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BirdList.scss';
import birdsData from '../../data/birds';

import BirdListItem from './BirdListItem';

const BirdsList = (props) => {
  const { page } = props;

  return (
    <ul className="item-list list-group">
      {birdsData[page].map((bird) => {
        return (
          <BirdListItem
            key={bird.id}
            name={bird.name}
            id={bird.id}/>
        )
      })}
    </ul>
  )
};

const mapStateToProps = (state) => {
 
  return {
    page: state.page.page
  }
}

export default connect(mapStateToProps, null)(BirdsList);