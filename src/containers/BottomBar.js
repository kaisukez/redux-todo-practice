import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { modeChange, clearCompletedClick} from '../actions/index'

import ItemTracker from '../components/ItemTracker';
import ModeButtons from '../components/ModeButtons';
import ClearButton from '../components/ClearButton';

class BottomBar extends Component {
  clearButtonDisplay(itemList) {
    if(this.props.itemList.filter(item => item.isCompleted).length === 0)
      return true;
    return false;
  }

  bottomBarDisplay() {
    if(this.props.itemList.length === 0)
      return false;
    return true;
  }

  bottomBarRender() {
    if(this.bottomBarDisplay()) {
      return (
        <div>
          <ItemTracker
            num={this.props.itemList.filter(item =>
              !item.isCompleted
            ).length}
          />
          <ModeButtons
            modeChangeFunc={this.props.modeChange}
          />
          <ClearButton
            display={this.clearButtonDisplay()}
            clearCompletedClickFunc={this.props.clearCompletedClick}
          />
        </div>
      )
    }
    return null;
  }

  render() {
    return this.bottomBarRender()
  }
}

function mapStateToProps(state) {
  return {
    itemList: state.itemList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ modeChange, clearCompletedClick }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
