import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    axios.get('https://api.propublica.org/congress/v1/115/senate/members.json')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="container">
        <h1>This is only a test</h1>
      </div>
    );
  }
}

export default Test;
