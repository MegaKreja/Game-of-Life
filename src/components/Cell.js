import React from "react";
import "../styles/Cell.css";

const cell = (props) => {
  return (
    <td className={props.value === 1 ? "alive" : "dead"}>&nbsp;</td>
  );
}

export default cell;