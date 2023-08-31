import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/cardSlice";
import overviewReducer from "./features/Admin/overviewSlice";

export default configureStore({
  reducer: {
    card: cardReducer,
    overview: overviewReducer,
  },
});
