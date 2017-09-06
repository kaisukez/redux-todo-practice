import React from 'react';

export default (props) => {
  return (
    <span id="itemLeft" className="input-group-addon">
      {props.num} {props.num > 1 ? " items" : " item"} left
    </span>
  )
}
