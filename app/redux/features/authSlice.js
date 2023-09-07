import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false,
};

const Base_URL= ""

export const loginUser = createAsyncThunk(
    "/api/v1/auth/login",
    async (values, { rejectWithValue }) => {
       try {
          const response = await axios.post(`${url}/api/v1/auth/login`, values);
          localStorage.setItem("token", response.data.token);
          console.log(response.data);
          return response.data;
       } catch (error) {
          console.log(error.response.data.error);
          return rejectWithValue(error.response.data.error);
       }
    }
 );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  }
});

export default authSlice.reducer;
