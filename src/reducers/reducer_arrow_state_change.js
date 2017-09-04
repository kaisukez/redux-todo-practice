import { ARROW_CLICKED } from '../actions/index';

export default function(state = false, action) {
  switch(action.type) {
    case ARROW_CLICKED:
      if(state)
        return false;
      else
        return true;

    default:
      return state;
  }
}
