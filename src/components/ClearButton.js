import React from 'react';

export default (props) => {
  return (
    <span>
      <button>{props.display ? "Clear completed" : null}</button>
    </span>
  )
}
