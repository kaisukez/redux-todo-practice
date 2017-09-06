import React from 'react';

export default (props) => {
  return (
      <button
        className="btn btn-info input-group-addon"
        onClick={() => props.clearCompletedClickFunc()}
      >
        Clear completed
      </button>
  )
}
