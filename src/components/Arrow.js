import React from 'react';

export default (props) => {
  if(props.display) {
    let text = "arrowClicked";
    if(!props.isClicked) {
      text = "arrow";
    }
    return (
      <button
        id="arrow"
        className="input-group-addon"
        onClick={() => props.arrowClickedFunc(props.isClicked)}
      >
        {text}
      </button>
    )
  }
  return null;
}
