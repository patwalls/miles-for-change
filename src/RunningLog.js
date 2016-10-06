import React, { Component } from 'react';
import './App.css';
import RunningLogItem from './RunningLogItem.js';

class RunningLog extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Day</th>
            <th>Miles</th>
            <th>Average Pace</th>
          </tr>
        </thead>
        <tbody>
          <RunningLogItem date={ '2016-03-05' }/>
          <RunningLogItem date={ '2016-03-06' }/>
        </tbody>
      </table>
    );
  }
}

export default RunningLog;
