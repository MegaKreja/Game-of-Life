import React from "react";
import "../styles/ControlBar.css";

const controlBar = (props) => {
  return (
    <div className="controls">
      <div className="button" onClick={props.play}>Play</div> {/* pokretanje set interval*/}
      <div className="button" onClick={props.pause}>Pause</div> {/* clear interval*/}
      <div className="button" onClick={props.random}>Random</div> {/* dugme za randomizovanje polja */}
      <div className="button" onClick={props.clear}>Clear</div> {/* pretvaranje svih polja u nulu i gasenje set intervala*/}
    </div>
  );
}

export default controlBar;