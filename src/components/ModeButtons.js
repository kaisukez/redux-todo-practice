import React from 'react';

export default (props) => {
  return (
    <span>
      <button onClick={() => props.modeChangeFunc("All")}>All</button>
      <button onClick={() => props.modeChangeFunc("Active")}>Active</button>
      <button onClick={() => props.modeChangeFunc("Completed")}>Completed</button>
    </span>
  )
}
