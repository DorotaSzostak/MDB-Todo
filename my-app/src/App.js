import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="button__wrapper">

      
      <TodoList />
      </div>
    );
  }
}

export default App;

//po kliknięciu w add -> pojawia się li z trescią "task number + numer zadania"