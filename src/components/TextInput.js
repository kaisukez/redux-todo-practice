import React from 'react';

export default (props) => {
  return (
    <input
      id="textInput"
      className="form-control"
      type="text"
      onKeyDown={event => {
        if(event.keyCode === 13) {
          props.enterList(event.target.value)
          event.target.value=""
        }
      }}
    />
  )
}
