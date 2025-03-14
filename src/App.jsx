import React, { useState } from "react"; // Ensure useState is imported
import Greeting from "./components/MyFunComp";
import UserInfo from "./components/MyClassComp";
import TaskComponent from "./components/MyTaskComp";
import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", description: "Milk, eggs, bread" },
    { id: 2, title: "Finish project", description: "Submit React assignment" },
    { id: 3, title: "Buy Lotto tickets", description: "Scratch off tickets" },
    { id: 4, title: "Watch project vids", description: "View class recordings" }
  ]);

  // Task 4: Function to add a new task
  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]); // Correctly update state
  };

  // Task 5: Function to delete a task with confirmation
  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }
  };

  return (
    <div>
      <Greeting username="Kyle" /> {/* Task 1: Greeting Component */}
      <UserInfo /> {/* Task 2: Lucky Number */}
      <TaskForm addTask={addTask} /> {/* Task 4: Task Form */}
      <TaskComponent tasks={tasks} deleteTask={deleteTask} /> {/* Task 3 & 5: Task List */}
    </div>
  );
};

export default App;
