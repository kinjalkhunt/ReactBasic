import React, { useState } from "react";

const ToDoTask = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [counter, setCounter] = useState(1); // Unique task number

  console.log("component will mount");

  const addOrUpdateTask = () => {
    // if (input.trim() === "") return;

    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editIndex ? { ...task, text: input } : task
      );
      console.log("IDGDF???????????",updatedTasks);
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task with unique ID
      setTasks([...tasks, { id: counter, text: input, completed: false }]);
      setCounter(counter + 1); // Increment counter for next task
      console.log("ADD TASK", ...tasks);
   }
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    if (editIndex === id) {
      setEditIndex(null);
      setInput("");
    }
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setInput(taskToEdit.text);
      setEditIndex(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded-md mr-2"
          placeholder="Add or edit a task..."
        />
        <button
          onClick={addOrUpdateTask}
          className={`px-4 py-2 rounded-md text-white ${
            editIndex !== null ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {editIndex !== null ? "Save" : "Add"}
        </button>
      </div>
      <ul className="mt-4 w-64">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 my-2 border rounded-md ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
              <strong>{task.id}.</strong> {task.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => editTask(task.id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded-md"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoTask;

