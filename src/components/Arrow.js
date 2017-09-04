import React from 'react';

export default (props) => {
  if(props.display)
    return (
      <span>arrow </span>
    );
  return <div></div>;
}
