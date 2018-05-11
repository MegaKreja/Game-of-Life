import React, { Component } from 'react';
import '../styles/App.css';
import ControlBar from "./ControlBar";
import Grid from "./Grid";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>John Conway's Game of Life</h1>
        <h2>Generations:</h2> {/* ovde ce se naslediti brojno stanje iz glavne komponente*/}
        <ControlBar />
        <Grid />
      </div>
    );
  }
}

export default App;
