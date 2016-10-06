import React, { Component } from 'react';
import './App.css';
import RunningPhoto from './running_photo.jpg';
import MoustacheLogo from './movember_logo.png';
import Pledge from './Pledge.js';

class PhotoInfo extends Component {
  render() {
    return (
      <div className='container-fluid photo-info'>
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <img src={RunningPhoto} alt="running-img" className="img-thumbnail running-photo" />
          </div>
          <div className="col-md-7 col-sm-7 info">
            <div className='details sub-info'>
              <p>I'll be running the Los Angeles Marathon on March 19, 2017, officially sponsored by the <a href='https://us.movember.com/?home' target='_blank'>Movember Foundation</a>.</p>
              <p>I plan to run over <strong>500</strong> miles while training over the next five months.</p>
              <p>By pledging, you are committing $0.01 (one penny) for every mile I run.</p>
              <p>You can follow my progress below in the run log.</p>
              <p>100% of the proceeds go to charity. Thanks for your support!</p>
            </div>
            <div className='charity sub-info'>
              <img src={MoustacheLogo} alt="moustache-img" className="img-responsive moustache-photo" />
              <div>
                The Movember Foundation is the only charity tackling men’s health on a global scale, year round. Millions have joined the movement, raising $710 million to help us fund over 1,200 men’s health projects focusing on prostate cancer, testicular cancer, mental health and suicide prevention.
              </div>
            </div>
            <div className='pledge sub-info'>
              <Pledge />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoInfo;
