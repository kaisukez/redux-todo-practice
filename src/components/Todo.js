import React from 'react';

function findBtnDeleteClass(isHover) {
  if(isHover) {
    return "btnDelete";
  }
  return "btnDeleteZeroOpacity";
}

export default (props) => {
  return (
    <div
      className="list-group-item"
      onMouseOver={() => props.mouseOverFunc(props.index)}
      onMouseOut={() => props.mouseOutFunc(props.index)}
    >
      <input
        type="checkbox"
        defaultChecked={props.isCompleted}
        onClick={() => props.itemClickedFunc(props.index)}
      />
      <span> {props.detail} </span>
      <button
        id={findBtnDeleteClass(props.isHover)}
        className="btn-delete"
        onClick={() => props.deleteListFunc(props.index)}
      >
        delete
      </button>
    </div>
  );
}
