import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ name: "buy milk" }, { name: "mow lawn" }, { name: "escape" }],
  },
  reducers: {},
});

export default todoSlice.reducer;
