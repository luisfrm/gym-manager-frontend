import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    setError: (state, {payload}) => {
      state.error = payload;
    }
  }
})

// Export actions
export const { setUser, logout, setError } = userSlice.actions;

// Export reducer
export default userSlice.reducer;