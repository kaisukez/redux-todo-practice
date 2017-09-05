import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mouseOver, mouseOut, deleteList, itemClicked } from '../actions/index'

import Todo from '../components/Todo';


class ListTodo extends Component {
  renderList(mode) {
    if(this.props.itemList.length <= 0) {
      return null;
    }

    let listToRender = this.props.itemList;
    if(mode === "Active") {
      listToRender = listToRender.map(item => {
        if(!item.isCompleted) {
          return item;
        } else {
          return null;
        }
      });
    } else if(mode === "Completed") {
      listToRender = listToRender.map(item => {
        if(item.isCompleted) {
          return item;
        } else {
          return null;
        }
      });
    }

    return listToRender.map((item, index) => {
      // console.log(item);
      if(!item){
        return null;
      }
      return (
        <Todo
          key={index}
          index={index}
          detail={item.detail}
          isCompleted={item.isCompleted}
          isHover={item.mouseHover}
          mouseOverFunc={this.props.mouseOver}
          mouseOutFunc={this.props.mouseOut}
          deleteListFunc={this.props.deleteList}
          itemClickedFunc={this.props.itemClicked}
        />
      )
    })
  }

  render() {
    // console.log("itemList:", this.props.itemList)
    return (
      <div className="list-group">
        {this.renderList(this.props.mode)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemList: state.itemList,
    value: state.value,
    mode: state.mode
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ mouseOver, mouseOut, deleteList, itemClicked }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
