import { combineReducers } from 'redux';
import UpdateItemList from './reducer_update_item_list';
import ArrowStateChange from './reducer_arrow_state_change';
import ModeChange from './reducer_mode_change';

const rootReducer = combineReducers({
  itemList: UpdateItemList,
  arrowState: ArrowStateChange,
  mode: ModeChange
});

export default rootReducer;
