import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AppData from "../../config/appData.json";
import axios from "axios";

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${AppData.BASE_URL}auth/login`,
        values
      );
      localStorage.setItem("token", response.data.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data.data.error);
      return rejectWithValue(error.response.data.data.error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutCustomer: (state) => {
      state.customer.token = null;
      state.customer.user = null;
      state.customer.error = null;
      state.customer.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      if (!action.payload.data) {
        return;
      }
      console.log(action.payload.data);

      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
    });
  },
});

export default authSlice.reducer;
