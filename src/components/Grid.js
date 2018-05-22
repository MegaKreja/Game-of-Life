import React from "react";
import "../styles/Grid.css";

const grid = (props) => {
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