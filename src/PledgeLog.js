import React, { Component } from 'react';
import './App.css';

class PledgeLog extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount Pledged</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joel Klonoff</td>
            <td>$0.02 / mile</td>
            <td>Best of luck!</td>
          </tr>
          <tr>
            <td>Spyq Sklar</td>
            <td>$0.01 / mile</td>
            <td>I'm gay!</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PledgeLog;
