const Output = (props) => (
  <div>
    <ul>
      {props.todos.map((item, index) => (
        <li key={index}>
          <button onClick={() => props.deleteTodo(index)}>X</button>
          {item.todo}
        </li>
      ))}
    </ul>
  </div>
)

export default Output;
