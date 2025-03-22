import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, saveEdit, setEdit } from './slice/ToDoSlice.js';

function ToDo() {
    const [tasks, setTasks] = useState('');
    const dispatch = useDispatch();
    const { todo, editTodo } = useSelector((state) => state.todos);

    const handleAddTodo = () => {
        if (tasks.trim()) {
            dispatch(addToDo(tasks));
            setTasks('');
        }
    };

    const handleEditChange = (e) => {
        dispatch(setEdit({ ...editTodo, tasks: e.target.value }));
    };

    return (
        <div>
            <h1 className='py-4 font-bold'>Hello React-Redux Toolkit</h1>
            <input
                type='text'
                value={tasks}
                onChange={(e) => setTasks(e.target.value)}
                placeholder='Enter text here'
                className="border p-2 w-64"
            />
            <button
                className="border px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleAddTodo}
            >
                Add ToDo
            </button>
            <ul className='mt-4'>
                {todo.map((todos) => (
                    <li key={todos.id} className='p-2 border-b'>
                        {editTodo?.id === todos.id ? (
                            <input
                                type='text'
                                value={editTodo.tasks}
                                onChange={handleEditChange}
                                onBlur={() => dispatch(saveEdit({ id: editTodo.id, newText: editTodo.tasks }))}
                                className='border p-1'
                                autoFocus
                            />
                        ) : (
                            <span>{todos.tasks}</span>
                        )}
                        {editTodo?.id === todos.id ? null : (
                            <button
                                className='border px-2 py-1 bg-yellow-500 text-white rounded ml-2'
                                onClick={() => dispatch(setEdit(todos))}
                            >
                                Edit
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
