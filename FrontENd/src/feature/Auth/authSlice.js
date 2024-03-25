import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";

// Page reload
const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user : userExist ? userExist :  null,
  isLoading : false,
  isSuccess : false,
  isError : false,
  message : "",
}

const authSlice = createSlice({
  name :"auth",
  initialState,
  reducers : {},
  extraReducers : builder => {
    builder

    // Login
    .addCase(loginUser.pending, (state) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
      state.message = ""
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.user = action.payload
      state.message = ""
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.user = null
      state.message = action.payload
    })


    // Logout
    .addCase(logOutUser.fulfilled , (state, action) => {
      state.user = null
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
    })


    // Register
    .addCase(registerUser.pending, (state) => {
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
      state.message = ""
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.user = action.payload
      state.message = ""
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.user = null
      state.message = action.payload
    })

  }
})


// Login User

export const loginUser = createAsyncThunk("AUTH/LOGIN", async(formData, thunkAPI) => {
  try {
    return await authServices.login(formData);
  } catch (error) {
    const message =  error.response.data.message
    return thunkAPI.rejectWithValue(message);
  }
})


// Logout

export const logOutUser = createAsyncThunk("AUTH/LOGOUT", async() => {
  localStorage.removeItem('user');
})


// Register User

export const registerUser = createAsyncThunk("AUTH/REGISTER", async(formData, thunkAPI) => {
  try {
    return await authServices.register(formData);
  } catch (error) {
    const message =  error.response.data.message
    return thunkAPI.rejectWithValue(message);
  }
})


export default authSlice.reducer;