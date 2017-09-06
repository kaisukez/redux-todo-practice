import React from 'react';

export default (props) => {
  return (
    <span>
      <button
        className="btn btn-light input-group-addon btnMode"
        onClick={() => props.modeChangeFunc("All")}>
        All
      </button>

      <button
        className="btn btn-light input-group-addon btnMode"
        onClick={() => props.modeChangeFunc("Active")}>
        Active
      </button>

      <button
        className="btn btn-light input-group-addon btnMode"
        onClick={() => props.modeChangeFunc("Completed")}>
        Completed
      </button>
    </span>
  )
}
