import React, { Component } from 'react';

// const TodoItem = ({name},{index}) => (
//   <li>{name}{index}</li>
// )

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todoName: "Task number"
    };
    this.addTodo = this.addTodo.bind(this)
    this.removeLast = this.removeLast.bind(this)
    this.removeAll = this.removeAll.bind(this)
  }
    addTodo() {
      this.state.todos.push({
      name: this.state.todoName
    });
    this.setState({
     todos: this.state.todos,
     todoName: "Task number"
 });
  }

  removeLast(todos){
    this.state.todos.pop()
    this.setState(
      {todos:this.state.todos}
    )
  };

  removeAll(){
    this.state.todos = [];
    this.setState(
      {todos:this.state.todos}
    )
  }
  render (){
      const {newTodo} = this.state;
      const todos = this.state.todos.map((name, index) => (
        <li key={index} text={name.name}>Task number {index + 1}</li>
      ))

    return (
      <div>
      <button onClick={this.addTodo} type="submit" className="button__add">Add</button>
      <button onClick={this.removeLast} className="button__add">Remove</button>
      <button onClick={this.removeAll} className="button__add">Clear</button>
      <ul>
        {todos}
      </ul>
      </div>
    )
  }
}

export default TodoList;
