import React from 'react';

export default (props) => {
  if(props.display) {
    if(props.isClicked)
      return <span>arrow clicked </span>;
    return <span>arrow </span>;
  }
  return <div></div>;
}
