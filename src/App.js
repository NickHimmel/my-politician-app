import React, { Component } from 'react';
import * as d3 from 'd3';
import * as queue from 'd3-queue';
import './App.css';
import Map from './components/Map.js';

class App extends Component {
  render() {
    console.log(queue.queue);
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default App;
