import React from "react";

const cell = (props) => {
  return (
    <td>{Math.floor(Math.random() * 2)}</td>
  );
}

export default cell;