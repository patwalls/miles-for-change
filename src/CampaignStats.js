import React, { Component } from 'react';
import './App.css';

class CampaignStats extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-xs-4 text-center big-number"><h1>45</h1> backers</div>
          <div className="col-xs-4 text-center big-number"><h1>145</h1> miles run</div>
          <div className="col-xs-4 text-center big-number"><h1>$239.26</h1> raised</div>
        </div>
      </div>
    );
  }
}

export default CampaignStats;
