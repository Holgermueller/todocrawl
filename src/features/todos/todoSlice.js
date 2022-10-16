import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { name: "buy milk" },
      { name: "mow lawn" },
      { name: "escape" },
      { name: "make dinner" },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        name: action.payload.name,
      });
    },
    removeTodo(state, action) {
      console.log(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
