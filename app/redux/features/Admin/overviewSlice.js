import { createSlice } from "@reduxjs/toolkit";
const overviewSlice = createSlice({
  name: "overview",
  initialState: {
    name: "overview",
  },
  reducers: {
    SET_NAME: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { SET_NAME } = overviewSlice.actions;
export default overviewSlice.reducer;
