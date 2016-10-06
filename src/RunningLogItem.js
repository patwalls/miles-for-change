import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class RunningLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      duration: ''
    };
  }
  fitbitRequest() {
    $.ajax({
       url: 'https://api.fitbit.com/1/user/3Y2M7T/activities/list.json',
       headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzWTJNN1QiLCJhdWQiOiIyMjgyR1QiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IiwiZXhwIjoxNDc1Nzk2MjI5LCJpYXQiOjE0NzU3MTc1ODN9.lzJhrxkMQGT-N1VNaLQkvU7X_8EuFAvRiC03J428IVs"
       },
       data: {
          afterDate: this.props.date,
          offset: '0',
          sort: 'asc',
          limit: '20',
       },
       context: this,
       error: function() {
          console.log('an error occurred')
       },
       success: function(data) {
         console.log(data);
         this.runToday(data);
       },
       type: 'GET'
    });
  }
  runToday(data) {
    for (var i = 0; i < data.activities.length; i++) {
      console.log(data.activities[i].activityName);
      console.log(data.activities[i].startTime.slice(0,10));
      console.log(this.props.date);
      if (data.activities[i].activityName === 'Run' && data.activities[i].startTime.slice(0,10) === this.props.date) {
        this.setState({ distance: data.activities[i].distance, duration: data.activities[i].duration });
        console.log(data.activities[i]);
        return;
      } else if (data.activities[1].startTime.slice(0,10) !== this.props.date) {
        return;
      }
    }
  }
  render() {
    this.fitbitRequest();
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.state.distance}</td>
        <td>{this.state.duration}</td>
      </tr>
    );
  }
}

export default RunningLog;
