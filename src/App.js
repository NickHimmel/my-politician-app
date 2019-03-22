import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import Test from './components/Test.js';

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <Test />
      </div>
    );
  }
}

export default App;
