import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import Politicians from './components/Politicians.js';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div>
        <Map />
        <Politicians />
      </div>
    );
  }
}

export default App;
