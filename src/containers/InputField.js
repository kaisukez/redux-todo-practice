import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { arrowClicked, enterList} from '../actions/index'

import Arrow from '../components/Arrow';
import TextInput from '../components/TextInput';

class InputField extends Component {
  render() {
    return (
      <div>
        <Arrow
          isClicked={this.props.isArrowClicked}
          display={this.props.itemList.length < 1 ? false : true}
        />
        <TextInput enterList={this.props.enterList} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isArrowClicked: state.arrowState,
    itemList: state.itemList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ arrowClicked, enterList}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(InputField);
