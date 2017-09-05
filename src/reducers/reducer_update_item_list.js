import { ENTER_LIST, CLEAR_COMPLETED_CLICK, DELETE_LIST, ITEM_CLICKED, ARROW_CLICKED, MOUSE_OVER, MOUSE_OUT } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case ENTER_LIST:
      // console.log([...state, {detail: action.detail, isCompleted: false, mouseHover: false}])
      if(action.detail != "")
        return [...state, {detail: action.detail, isCompleted: false, mouseHover: false}];
      return state;

    case CLEAR_COMPLETED_CLICK:
      return state.filter(item => !item.isCompleted);

    case DELETE_LIST:
      return state.filter((item, index) => index !== action.index);

    case ITEM_CLICKED:
      return state.map((item, index) => {
        if(index === action.index) {
          if(item.isCompleted)
            return {detail: item.detail, isCompleted: false, mouseHover: item.mouseHover};
          else {
            return {detail: item.detail, isCompleted: true, mouseHover: item.mouseHover};
          }
        }
      })

    case ARROW_CLICKED:
      if(action.nowArrowState){
        return state.map(item => { return {
          detail: item.detail,
          isCompleted: false,
          mouseHover: item.mouseHover
        }})
      }
      else if(action.nowArrowState){
        return state.map(item => { return {
          detail: item.detail,
          isCompleted: true,
          mouseHover: item.mouseHover
        }})
      }
      break;

    case MOUSE_OVER:
      return state.map((item, index) => {
        if(index === action.index)
            return {detail: item.detail, isCompleted: item.isCompleted, mouseHover: true};
      })

    case MOUSE_OUT:
      return state.map((item, index) => {
        if(index === action.index)
            return {detail: item.detail, isCompleted: item.isCompleted, mouseHover: false};
      })

    default:
      return state;
  }
}
