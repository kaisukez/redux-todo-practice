import { MODE_CHANGE } from '../actions/index';

export default function(state = "Active", action) {
  switch(action.type) {
    case MODE_CHANGE:
      return action.mode;

    default:
      return state;
  }
}
