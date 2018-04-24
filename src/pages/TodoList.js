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
  }

  handleChange(event) {
    this.setState({ input: event.target.value })
  }

  addTodo() {
    this.setState(prevState => ({
      todos: prevState.todos.concat({todo: prevState.input, id: prevState.todos.length}),
      input: ""
    }))
  }

  deleteTodo(target_index) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo, index) => index !== target_index)
    }))
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.addTodo}>Add Todo</button>
        <Output todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default TodoList;
