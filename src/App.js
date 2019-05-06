import React, { Component } from 'react';
import 'normalize.css';
import './App.scss';
import Map from './components/Map.js';
import Representatives from './components/Representatives.js';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Map />
        <Representatives />
      </div>
    );
  }
}

export default App;
