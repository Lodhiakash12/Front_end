import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: ["Aniket", "Aakash"]
};

export const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload);
        },
        updateTodo: (state, action) => {
            const { index, newValue } = action.payload;
            if (index >= 0 && index < state.todos.length) {
                state.todos[index] = newValue;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoslice.actions;
export default todoslice.reducer;