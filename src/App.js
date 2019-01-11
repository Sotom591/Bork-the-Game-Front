import React, { Component } from 'react';
import './App.css';
import World from './containers/World'
import FightBarCont from './containers/FightBarCont'

class App extends Component {
  render() {
    return (
      <div className="App">
        <World />
        <FightBarCont />
      </div>
    );
  }
}

export default App;
