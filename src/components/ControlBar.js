import React from "react";
import "../styles/ControlBar.css";

const controlBar = (props) => {
  return (
    <div className="controls">
      <div className="button">Pause</div> {/* uslovno ime dugmeta play ili pause*/}
      <div className="button">Random</div> {/* dugme za randomizovanje polja */}
      <div className="button">Clear</div> {/* pretvaranje svih polja u nulu */}
    </div>
  );
}

export default controlBar;