import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo: [{ id: nanoid(), tasks: "Hello Redux" }], // ✅ Corrected nanoid()
};

const ToDoReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.todo.push({ id: nanoid(), tasks: action.payload }); // ✅ Using nanoid() for consistency
        },
        removeToDo: (state, action) => {
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        }
    },
});

export const { addToDo, removeToDo } = ToDoReducer.actions;
export default ToDoReducer.reducer;
