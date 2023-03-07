import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  name: "",
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      if (action) {
        state.users.push(action.payload);
        state.isAuthenticated = true;
        console.log(state.isAuthenticated);
      }
    },
    loginUser: (state, action) => {
      state.name = action.payload.name;
    },
    logoutUser: () => localStorage.removeItem("user"),
  },
  extraReducers: (build) => {},
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
