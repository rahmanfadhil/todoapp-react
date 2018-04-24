import React from 'react';

const Output = (props) => (
  <div>
    <ul>
      {props.todos.map((item, index) => (
        <li key={index}>
          <button onClick={() => props.deleteTodo(index)}>X</button>
          <button onClick={() => props.editTodo(index)}>EDIT</button>
          {item.todo}
        </li>
      ))}
    </ul>
  </div>
)

export default Output;
