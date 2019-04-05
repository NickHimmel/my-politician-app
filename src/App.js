import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import Politician from './components/Politician.js';

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <Politician />
      </div>
    );
  }
}

export default App;
