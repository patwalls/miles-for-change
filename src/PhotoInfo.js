import React, { Component } from 'react';
import './App.css';
import RunningPhoto from './running_photo.jpg';
import Pledge from './Pledge.js';

class PhotoInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <img src={RunningPhoto} alt="running-img" className="img-thumbnail running-photo" />
        </div>
        <div className="col-md-8 col-sm-8">
          <p>DETAILS</p>
          <p>MORE DETAILS</p>
          <p>DETAILS</p>
          <p>MORE DETAILS</p>
          <p>DETAILS</p>
          <Pledge />
        </div>
      </div>
    );
  }
}

export default PhotoInfo;
