import React, { Component } from 'react';
import './App.css';
import MoustachePhoto from './movember_moustache.png';

class Header extends Component {
  render() {
    return (
      <div className='header text-center'>
        <h1> MILES FOR CHANGE </h1>
        <h3> Every mile I run donates to charity. </h3>
      </div>
    );
  }
}

export default Header;
