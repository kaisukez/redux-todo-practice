import React from 'react';

export default (props) => {
  return (
      <button
        onClick={() => props.clearCompletedClickFunc()}
      >
        Clear completed
      </button>
  )
}
