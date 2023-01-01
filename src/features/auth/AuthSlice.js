import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },

    logout: (state, action) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});
