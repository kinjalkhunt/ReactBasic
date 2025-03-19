import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../redux/reducer/Reducer"; // Fixed import path

const TodoList = () => {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-md"
          placeholder="Add a new task..."
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 mb-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span
              className="cursor-pointer"
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
