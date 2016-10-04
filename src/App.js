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
  fitbitRequest() {
    $.ajax({
       url: 'https://api.fitbit.com/1/user/3Y2M7T/activities/list.json',
       headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzWTJNN1QiLCJhdWQiOiIyMjgyR1QiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNDc1NDUwNjI5LCJpYXQiOjE0NzUzNjUyNTZ9.CsLKjhLOatMlY7YaAtrq_TeQinhTQOp7_WTtKq8Q64I"
       },
       data: {
          afterDate: '2016-01-01',
          offset: '0',
          sort: 'asc',
          limit: '10'
       },
       error: function() {
          console.log('an error occurred')
       },
       success: function(data) {
          console.log(data)
       },
       type: 'GET'
    });
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
    this.fitbitRequest();
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
        <div className="row">
          <div className="btn-group btn-group-lg" role="group" aria-label="...">
            <button
              className="btn btn-default"
              type="submit"
              onClick={this.showRunningLog}>
                Running Log
            </button>
            <button
              className="btn btn-default"
              type="submit"
              onClick={this.showPledgeLog}>
                Pledges
            </button>
          </div>
          { this.renderLogOrPledges() }
        </div>
      </div>
    );
  }
}

export default App;
