import React, { Component } from 'react';
import '../styles/App.css';
import ControlBar from "./ControlBar";
import Grid from "./Grid";
import Cell from "./Cell";

class App extends Component {
  state = {
    table: [],
    playing: true,
    generations: 0
  }

  handlePlay = () => {
    this.setState({playing: true})
  }

  handlePause = () => {
    this.setState({playing: false})
  }

  createRandomGrid = () => {
    let table = this.state.table.slice();
    table = [];
    console.log(table);
    for (let i = 0; i < 20; i++) {
      let cells = []
      for (let j = 0; j < 20; j++) {
        cells.push(<Cell value={Math.floor(Math.random() * 2)}/>)
      }
      table.push(<tr key={i}>{cells}</tr>)
    }
    console.log(table);
    this.setState({table: table});
  }

  createEmptyGrid = () => {
    let table = this.state.table.slice();
    table = [];
    console.log(table);
    for (let i = 0; i < 20; i++) {
      let cells = []
      for (let j = 0; j < 20; j++) {
        cells.push(<Cell value={0} />)
      }
      table.push(<tr key={i}>{cells}</tr>)
    }
    console.log(table);
    this.setState({table: table});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  render() {
    return (
      <div className="container">
        <h1>John Conway's Game of Life</h1>
        <h2>Generations: {this.state.generations}</h2> {/* ovde ce se naslediti brojno stanje*/}
        <ControlBar 
          play={this.handlePlay}
          pause={this.handlePause}
          random={this.createRandomGrid}
          clear={this.createEmptyGrid}/>
        <Grid table={this.state.table}/>
      </div>
    );
  }
}

export default App;
