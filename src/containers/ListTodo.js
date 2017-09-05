import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';

class ListTodo extends Component {
  render() {
    if(this.props.itemList.length <= 0) {
      return <div></div>
    }

    console.log("itemList:", this.props.itemList)

    return (
      <div>
        {this.props.itemList.map((item, index) => {
          console.log("item:", item)
          return (
            <Todo
              key={index}
              detail={item.detail}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    itemList: state.itemList,
    value: state.value
  }
}

export default connect(mapStateToProps)(ListTodo);
