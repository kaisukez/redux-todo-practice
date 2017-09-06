import React from 'react';

export default (props) => {
  if(props.display) {
    let text = "arrowClicked";
    if(!props.isClicked) {
      text = "arrow";
    }

    return (
      <div className="input-group-btn">
        <button
          id="arrow"
          className="btn btn-dark"
          onClick={() => props.arrowClickedFunc(props.isClicked)}
        >
          {text}
        </button>
      </div>
    )
  }
  return null;
}
