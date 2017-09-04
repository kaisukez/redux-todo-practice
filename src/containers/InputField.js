import React, { Component } from 'react';
import Arrow from '../components/Arrow';
import TextInput from '../components/TextInput';

class InputField extends Component {
  render() {
    return (
      <div>
        <Arrow display={true}/>
        <TextInput />
      </div>
    )
  }
}


export default InputField;
