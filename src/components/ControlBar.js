import React from "react";
import "../styles/ControlBar.css";

const controlBar = (props) => {
  return (
    <div className="controls">
      <div className="button" onClick={props.play}>Play</div> {/* start interval*/}
      <div className="button" onClick={props.pause}>Pause</div> {/* clear interval*/}
      <div className="button" onClick={props.random}>Random</div> {/* random grid */}
      <div className="button" onClick={props.clear}>Clear</div> {/* clear grid */}
    </div>
  );
}

export default controlBar;