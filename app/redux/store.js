import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cardSlice";
import switchReducer from "./features/switchSlice";

export default configureStore({
  reducer: {
    card: cardReducer,
    switch: switchReducer,
  },
});
