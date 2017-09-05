import React from 'react';

export default (props) => {
  return (
    <div>
      <input type="checkbox" />
      <span> {props.detail}</span>
    </div>
  );
}
