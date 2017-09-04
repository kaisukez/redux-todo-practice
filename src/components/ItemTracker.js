import React from 'react';

export default (props) => {
  return (
    <span>{props.num} {props.num > 1 ? "items" : "item"} left</span>
  )
}
