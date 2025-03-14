import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  // Task 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim() || !description.trim()) {
      alert("Task name and description cannot be empty!");
      return;
    }

    // Create a new task object
    const newTask = { id: Date.now(), title: taskName, description };

    addTask(newTask); // Add task to state in App.jsx

    // Clear input fields after adding
    setTaskName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
