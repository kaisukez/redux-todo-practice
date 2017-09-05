import React from 'react';

export default (props) => {
  if(props.display) {
    let text = "arrowClicked";
    if(!props.isClicked) {
      text = "arrow";
    }
    return (
      <button
        onClick={() => props.arrowClickedFunc(props.isClicked)}
      >
        {text}
      </button>
    )
  }
  return null;
}
