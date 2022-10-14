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
      console.log(state.todos);
      state.todos.push({
        name: action.payload.todoData,
      });
    },
    removeTodo(state, action) {},
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
