import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
    name: "switch",
  initialState: {
    switchName: ""
  },
  reducers: {
    updateSwitchConfig: (state, action) => {
      return {
        value: {
          switchConfig: action.payload,
        },
      };
    },
  },
})

export const { updateSwitchConfig } = switchSlice.actions;
export default switchSlice.reducer;