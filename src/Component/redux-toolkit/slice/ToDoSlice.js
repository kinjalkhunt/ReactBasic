import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todo: [],
    editTodo: null,
}

const ToDoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.todo.push({ id: Date.now(), tasks: action.payload });
        },
        setEdit: (state, action) => {
            state.editTodo = { ...action.payload };
        },
        saveEdit: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todo.find((t) => t.id === id);
            if (todo) {
                todo.tasks = newText;
            }
            state.editTodo = null;
        }
    },
});

export const { addToDo, setEdit, saveEdit } = ToDoReducer.actions;
export default ToDoReducer.reducer;
