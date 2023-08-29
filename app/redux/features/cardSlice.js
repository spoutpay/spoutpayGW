import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardNumber: "",
    expData: "",
    cvv: "",
    apiResponse: null,
  },
  reducers: {
    updateCardData: (state, action) => {
      return {
        value: {
          cardData: action.payload,
        },
      };
    },
    cardDataResponse: (state, action) => {
      state.apiResponse = action.payload;
    },
  },
});

export const { updateCardData, cardDataResponse } = cardSlice.actions;
export default cardSlice.reducer;
