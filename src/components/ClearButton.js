import React from 'react';

export default (props) => {
  return (
      <button
        className="btn btn-info"
        onClick={() => props.clearCompletedClickFunc()}
      >
        Clear completed
      </button>
  )
}
