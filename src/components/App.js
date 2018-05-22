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
    let rowKey = 0;
    let colKey = 0;
    this.setState({generations: 0});
    table = [];
    console.log(table);
    for (let i = 0; i < 20; i++) {
      let cells = []
      for (let j = 0; j < 20; j++) {
        colKey++;
        cells.push(<Cell changeCell={this.changeCell} i={i} j={j} key={colKey} value={Math.floor(Math.random() * 2)}/>)
      }
      rowKey++;
      table.push(<tr key={rowKey}>{cells}</tr>)
    }
    // console.log(table);
    this.setState({table: table});
  }

  createEmptyGrid = () => {
    let table = this.state.table.slice();
    table = [];
    let rowKey = 0;
    let colKey = 0;
    this.setState({generations: 0});
    console.log(table);
    for (let i = 0; i < 20; i++) {
      let cells = []
      for (let j = 0; j < 20; j++) {
        colKey++;
        cells.push(<Cell changeCell={this.changeCell} i={i} j={j} key={colKey} value={0} />)
      }
      rowKey++;
      table.push(<tr key={rowKey}>{cells}</tr>)
    }
    // console.log(table);
    this.setState({table: table});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
  }

  changeCell = (indexI, indexJ) => {
    console.log(indexI, indexJ);
    let table = this.state.table.slice();
    let copy = [];
    let rowKey = 0;
    let colKey = 0;
    for(let i = 0; i < 20; i++) {
      let cells = [];
      for(let j = 0; j < 20; j++) {
        let cell = table[i].props.children[j].props.value;
        colKey++;
        if(i === indexI && j === indexJ) {
          cells.push(<Cell changeCell={this.changeCell} i={i} j={j} key={colKey} value={cell === 0 ? 1 : 0} />)
        } else {
          cells.push(<Cell changeCell={this.changeCell} i={i} j={j} key={colKey} value={cell} />)
        }
      }
      rowKey++;
      copy.push(<tr key={rowKey}>{cells}</tr>)
    }
    console.log(copy);
    this.setState({table: copy});
  }

  updateTable = () => {
    if(this.state.playing) {
      let table = this.state.table.slice();
      let copy = [];
      this.setState((prevState) => {
        return {
          generations: prevState.generations + 1
        }
      });
      let rowKey = 0;
      let colKey = 0;
      for(let i = 0; i < 20; i++) {
        let cells = [];
        for(let j = 0; j < 20; j++) {
          let cell = table[i].props.children[j].props.value;
          let count = 0;
          colKey++;
          // edges
          if(i === 0 || i === 19 || j === 0 || j === 19) {
            // left top 
            if(i === 0 && j === 0) {
              count += table[i].props.children[j + 1].props.value;
              count += table[i + 1].props.children[j + 1].props.value;
              count += table[i + 1].props.children[j].props.value;
            }
            // top
            else if(i === 0 && j > 0 && j < 19) {
              count += table[i].props.children[j - 1].props.value;
              count += table[i + 1].props.children[j - 1].props.value;
              count += table[i + 1].props.children[j].props.value;
              count += table[i + 1].props.children[j + 1].props.value;
              count += table[i].props.children[j + 1].props.value;
            }
            // right top
            else if(i === 0 && j === 19) {
              count += table[i].props.children[j - 1].props.value;
              count += table[i + 1].props.children[j - 1].props.value;
              count += table[i + 1].props.children[j].props.value;
            }
            // right side
            else if(j === 19 && i > 0 && i < 19) {
              count += table[i - 1].props.children[j].props.value;
              count += table[i - 1].props.children[j - 1].props.value;
              count += table[i].props.children[j - 1].props.value;
              count += table[i + 1].props.children[j - 1].props.value;
              count += table[i + 1].props.children[j].props.value;
            }
            // bottom right
            else if(i === 19 && j === 19) {
              count += table[i].props.children[j - 1].props.value;
              count += table[i - 1].props.children[j - 1].props.value;
              count += table[i - 1].props.children[j].props.value;
            }
            // bottom
            else if(i === 19 && j > 0 && j < 19) {
              count += table[i - 1].props.children[j].props.value;
              count += table[i - 1].props.children[j - 1].props.value;
              count += table[i].props.children[j - 1].props.value;
              count += table[i].props.children[j + 1].props.value;
              count += table[i - 1].props.children[j + 1].props.value;
            }
            // bottom left
            else if(i === 19 && j === 0) {
              count += table[i].props.children[j + 1].props.value;
              count += table[i - 1].props.children[j + 1].props.value;
              count += table[i - 1].props.children[j].props.value;
            }
            // left side
            else if(j === 0 && i > 0 && i < 19) {
              count += table[i - 1].props.children[j].props.value;
              count += table[i - 1].props.children[j + 1].props.value;
              count += table[i].props.children[j + 1].props.value;
              count += table[i + 1].props.children[j].props.value;
              count += table[i + 1].props.children[j + 1].props.value;
            }
          }
          // rest 
          else {
            count += table[i - 1].props.children[j].props.value;
            count += table[i - 1].props.children[j - 1].props.value;
            count += table[i + 1].props.children[j + 1].props.value;
            count += table[i].props.children[j - 1].props.value;
            count += table[i - 1].props.children[j + 1].props.value;
            count += table[i].props.children[j + 1].props.value;
            count += table[i + 1].props.children[j - 1].props.value;
            count += table[i + 1].props.children[j].props.value;
          }
          if(count === 3) {
            cell = 1;
          } else {
            cell = 0;
          }
          cells.push(<Cell changeCell={this.changeCell} i={i} j={j} key={colKey} value={cell} />)
        }
        rowKey++;
        copy.push(<tr key={rowKey}>{cells}</tr>)
        console.log(copy);
      }
      this.setState({table: copy});
    }
  }

  componentDidMount() {
    this.createRandomGrid();
    this.interval = setInterval(this.updateTable, 1000);
  }

  render() {
    return (
      <div className="container">
        <h1>John Conway's Game of Life</h1>
        <h2>Generations: {this.state.generations}</h2>
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
