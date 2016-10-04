import React, { Component } from 'react';
import './App.css';

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
          <tr>
            <td>10/01/2016</td>
            <td>5</td>
            <td>9:00 / mile</td>
          </tr>
          <tr>
            <td>10/02/2016</td>
            <td>7</td>
            <td>9:15 / mile</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RunningLog;
