import React, { useState } from "react";

const TaskComponent = ({ tasks, deleteTask }) => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  // Handle search input
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Toggle sorting order and apply sort
  const handleSort = () => {
    setSortAsc(!sortAsc);
  };

  // Filter and sort tasks dynamically
  const filteredTasks = tasks
    .filter(task => task.title.toLowerCase().includes(search)) // Filtering logic
    .sort((a, b) => sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)); // Sorting logic

  return (
    <div>
      {/* Task 3: Search Input */}
      <input 
        type="text" 
        placeholder="Search Tasks" 
        value={search} 
        onChange={handleSearch} 
      />
      <button onClick={handleSort}>Sort by Name ({sortAsc ? "A-Z" : "Z-A"})</button> {/* Task 3: Sort Button */}

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.description}
            <button onClick={() => {
              if (window.confirm("Are you sure you want to delete this task?")) {
                deleteTask(task.id);
              }
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
