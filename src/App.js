import React, { Component } from 'react';
import './App.css';
import InputField from './containers/InputField';
import ListTodo from './containers/ListTodo';
import BottomBar from './containers/BottomBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Todos</h1>
          <InputField />
          <ListTodo />
          <BottomBar />
        </div>
      </div>
    );
  }
}

export default App;
