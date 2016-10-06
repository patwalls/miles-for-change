import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './Header.js';
import CampaignStats from './CampaignStats.js';
import PhotoInfo from './PhotoInfo.js';
import RunningLog from './RunningLog.js';
import PledgeLog from './PledgeLog.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningLog: true
    };
    this.showRunningLog = this.showRunningLog.bind(this);
    this.showPledgeLog = this.showPledgeLog.bind(this);
  }
  showRunningLog() {
    this.setState({ runningLog: true })
  }
  showPledgeLog() {
    this.setState({ runningLog: false })
  }
  renderLogOrPledges() {
    if (this.state.runningLog) {
      return <RunningLog />;
    } else {
      return <PledgeLog />;
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className='top-portion'>
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <CampaignStats />
          </div>
        </div>
        <PhotoInfo />
        <div className="row text-center bottom-portion">
          <div className="btn-group btn-group-md" role="group" aria-label="...">
            <button
              className="btn btn-default"
              type="submit"
              onClick={this.showRunningLog}>
                Run Log
            </button>
            <button
              className="btn btn-default"
              type="submit"
              onClick={this.showPledgeLog}>
                Pledges
            </button>
          </div>
          <div className='container-fluid log'>
            { this.renderLogOrPledges() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
