import { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default NewTodoForm;
