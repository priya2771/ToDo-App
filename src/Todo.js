import { useState } from "react";

function Todo({ todo, removeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(todo.id, task);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input value={task} onChange={(e) => setTask(e.target.value)} />
          <button>Save</button>
        </form>
      ) : (
        <>
          <span>{todo.task}</span>
          <div>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
