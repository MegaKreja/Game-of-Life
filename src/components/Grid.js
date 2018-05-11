import React from "react";
import Cell from "./Cell";
import "../styles/Grid.css";

const grid = (props) => {
  let createTable = []
    for (let i = 0; i < 20; i++) {
      let cells = []
      for (let j = 0; j < 20; j++) {
        cells.push(<Cell />)
      }
      createTable.push(<tr>{cells}</tr>)
  }

  return (
    <table>
      {createTable}
    </table>
  );
}

export default grid;