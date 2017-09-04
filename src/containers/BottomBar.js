import React, { Component } from 'react';
import ItemTracker from '../components/ItemTracker';
import ModeButtons from '../components/ModeButtons';
import ClearButton from '../components/ClearButton';

class BottomBar extends Component {
  render() {
    return (
      <div>
        <ItemTracker num={3}/>
        <ModeButtons />
        <ClearButton display={true} />
      </div>
    )
  }
}

export default BottomBar;
