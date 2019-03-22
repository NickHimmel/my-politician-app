import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    axios.get('https://api.propublica.org/congress/v1/members/house/NY/14/current.json', {
        headers: {
          'X-API-Key': 'S3n7PyLwWE7DJIX8DtlpAn4VqFgYnbvQZ843SBsB'
        }})
      .then(function (response) {
        console.log(response.data);
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
