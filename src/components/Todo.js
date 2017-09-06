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
      className="list-group-item listItem"
      onMouseOver={() => props.mouseOverFunc(props.index)}
      onMouseOut={() => props.mouseOutFunc(props.index)}
    >
      <input
        type="checkbox"
        checked={props.isCompleted}
        onClick={() => props.itemClickedFunc(props.index)}
      />
      <span> {props.detail} </span>
      <button
        id={findBtnDeleteClass(props.isHover)}
        className="btn btn-danger btn-delete"
        onClick={() => props.deleteListFunc(props.index)}
      >
        delete
      </button>
    </div>
  );
}
