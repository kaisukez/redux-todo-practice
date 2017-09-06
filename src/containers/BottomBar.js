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

  findButtonClass(mode) {
    if(this.props.mode === mode) {
      return "btn btn-light btnMode active";
    }
    return "btn btn-light btnMode"
  }

  bottomBarRender() {
    if(this.bottomBarDisplay()) {
      return (
        <div
          id="bottomBar"
          className="input-group-btn"
        >
          <ItemTracker
            num={this.props.itemList.filter(item =>
              !item.isCompleted
            ).length}
          />

          <button
            className={this.findButtonClass("All")}
            onClick={() => this.props.modeChange("All")}>
            All
          </button>

          <button
            className={this.findButtonClass("Active")}
            onClick={() => this.props.modeChange("Active")}>
            Active
          </button>

          <button
            className={this.findButtonClass("Completed")}
            onClick={() => this.props.modeChange("Completed")}>
            Completed
          </button>

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
    itemList: state.itemList,
    mode: state.mode
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ modeChange, clearCompletedClick }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);
