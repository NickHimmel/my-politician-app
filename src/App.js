import React, { Component } from 'react';
import 'normalize.css';
import './App.scss';
import Map from './components/Map.js';
import Politicians from './components/Politicians.js';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Map />
        <Politicians />
      </div>
    );
  }
}

export default App;
