import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // ADD
  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  // DELETE
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // EDIT
  const updateTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo)),
    );
  };

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
