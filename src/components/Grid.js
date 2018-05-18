import React from "react";
import "../styles/Grid.css";

const grid = (props) => {
  // let createTable = []
  //   for (let i = 0; i < 20; i++) {
  //     let cells = []
  //     for (let j = 0; j < 20; j++) {
  //       cells.push(<Cell />)
  //     }
  //     createTable.push(<tr key={i}>{cells}</tr>)
  // }
  // console.log(createTable);
  let table = <tr><td>Loading...</td></tr>
  if(props.table.length > 0) {
    table = props.table;
  }
  return (
    <table>
      <tbody>
        {table}
      </tbody>
    </table>
  );
}

export default grid;