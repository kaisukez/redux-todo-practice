export const ITEM_CLICKED = 'ITEM_CLICKED';
export const ARROW_CLICKED = 'ARROW_CLICKED';
export const ENTER_LIST = 'ENTER_LIST';
export const CLEAR_COMPLETED_CLICK = 'CLEAR_COMPLETED_CLICK';
export const MODE_CHANGE = 'MODE_CHANGE';
export const DELETE_LIST = 'DELETE_LIST';
export const MOUSE_OVER = 'MOUSE_OVER';
export const MOUSE_OUT = 'MOUSE_OUT';

export function itemClicked(index) {
  return {
    type: ITEM_CLICKED,
    index
  }
}

export function arrowClicked(nowArrowState) {
  return {
    type: ARROW_CLICKED,
    nowArrowState
  }
}

export function enterList(detail) {
  return {
    type: ENTER_LIST,
    detail
  }
}

export function clearCompletedClick() {
  return {
    type: CLEAR_COMPLETED_CLICK
  }
}

export function modeChange(mode) {
  return {
    type: MODE_CHANGE,
    mode
  }
}

export function deleteList(index) {
  return {
    type: DELETE_LIST,
    index
  }
}

export function mouseOver(index) {
  return {
    type: MOUSE_OVER,
    index
  }
}

export function mouseOut(index) {
  return {
    type: MOUSE_OUT,
    index
  }
}
