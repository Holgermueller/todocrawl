import { createSlice, current } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { name: "buy milk", id: "1" },
      { name: "mow lawn", id: "2" },
      { name: "escape", id: "3" },
      { name: "make dinner", id: "4" },
      { name: "No, data is not persisted with a backend", id: "5" },
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

      current(state.todos).map((item) => console.log(item.name));

      // let result = current(state.todos).indexOf(
      //   (item) => item.id === action.payload
      // );
      // console.log(result);
      // console.log(todoToRemove);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
