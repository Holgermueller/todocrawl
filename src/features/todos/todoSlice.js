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
      console.log(action);
      state.todos.push({
        name: action.payload.name,
      });
    },
    removeTodo(state, action) {},
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
