import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import TodoList from './pages/TodoList'
import About from './pages/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Todo App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todolist">Todo List</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
