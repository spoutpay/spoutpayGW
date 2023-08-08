import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardNumber: "",
    expData: "",
    cvv: "",
  },
  reducers: {
    updateCardData: (state, action) => {
      return {
        value: {
          cardData: action.payload,
        },
      };
    },
  },
});

export const { updateCardData } = cardSlice.actions;
export default cardSlice.reducer;
