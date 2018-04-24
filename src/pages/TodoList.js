import React, { Component } from 'react';

import Output from '../small/output'

class TodoList extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      input: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
  }

  handleChange(event) {
    this.setState({ input: event.target.value })
  }

  addTodo() {
    if(this.state.input === "") {
      alert('Input cannot be empty')
    } else {
      this.setState(prevState => ({
        todos: prevState.todos.concat({todo: prevState.input, id: prevState.todos.length}),
        input: ""
      }))
    }
  }

  deleteTodo(target_index) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo, index) => index !== target_index)
    }))
  }

  editTodo(target_index) {
    const new_value = prompt("Edit Todo")
    if(new_value === ""){
      alert("Input cannot be empty");
    } else {
      let todos = Object.assign(this.state.todos)
      todos[target_index].todo = new_value
      this.setState((prevState) => ({
        todos: todos
      }))
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.addTodo}>Add Todo</button>
        <Output todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
      </div>
    );
  }
}

export default TodoList;
