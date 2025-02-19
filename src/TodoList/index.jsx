import React from "react";

const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const handleTodos = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <div style = {{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
      }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={handleTodos}
        style={{
          margin: 10,
        }}
      >
        Add Todo
      </button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
