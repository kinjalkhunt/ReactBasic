// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToDo, saveEdit, setEdit } from './slice/ToDoSlice.js';

// function ToDo() {
//     const [tasks, setTasks] = useState('');
//     const dispatch = useDispatch();
//     const { todo, editTodo } = useSelector((state) => state.todos);

//     const handleAddTodo = () => {
//         if (tasks.trim()) {
//             dispatch(addToDo(tasks));
//             setTasks('');
//         }
//     };

//     const handleEditChange = (e) => {
//         dispatch(setEdit({ ...editTodo, tasks: e.target.value }));
//     };

//     return (
//         <div>
//             <h1 className='py-4 font-bold'>Hello React-Redux Toolkit</h1>
//             <input
//                 type='text'
//                 value={tasks}
//                 onChange={(e) => setTasks(e.target.value)}
//                 placeholder='Enter text here'
//                 className="border p-2 w-64"
//             />
//             <button
//                 className="border px-4 py-2 bg-blue-500 text-white rounded"
//                 onClick={handleAddTodo}
//             >
//                 Add ToDo
//             </button>
//             <ul className='mt-4'>
//                 {todo.map((todos) => (
//                     <li key={todos.id} className='p-2 border-b'>
//                         {editTodo?.id === todos.id ? (
//                             <input
//                                 type='text'
//                                 value={editTodo.tasks}
//                                 onChange={handleEditChange}
//                                 onBlur={() => dispatch(saveEdit({ id: editTodo.id, newText: editTodo.tasks }))}
//                                 className='border p-1'
//                                 autoFocus
//                             />
//                         ) : (
//                             <span>{todos.tasks}</span>
//                         )}
//                         {editTodo?.id === todos.id ? null : (
//                             <button
//                                 className='border px-2 py-1 bg-yellow-500 text-white rounded ml-2'
//                                 onClick={() => dispatch(setEdit(todos))}
//                             >
//                                 Edit
//                             </button>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ToDo;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, removeToDo } from "./slice/ToDoSlice";

function ToDo() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todo); // ✅ Corrected state path

    const handleAddTodo = () => {
        if (task.trim()) {
            dispatch(addToDo(task));
            setTask("");
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="py-3 text-2xl font-bold">Hello Redux-Toolkit</h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter Todo"
                    value={task}
                    className="border p-2 w-64"
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    className="border p-2 bg-blue-500 text-white rounded"
                    onClick={handleAddTodo}
                >
                    Add Todo
                </button>
            </div>

            <ul className="mt-4">
                {todos.map((todo) => ( // ✅ Corrected `.map()`
                    <li key={todo.id} className="flex justify-between items-center p-2 border-b">
                        <span>{todo.tasks}</span> {/* ✅ Fixed: Use correct key 'tasks' */}
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded"
                            onClick={() => dispatch(removeToDo(todo.id))} // ✅ Fixed: Correct payload
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
