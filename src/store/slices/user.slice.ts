import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 token: null,
};

const userSlice = createSlice({
 name: "user",
 initialState,
 reducers: {
  setUser(state, action) {},
  setToken(state, action) {},
 },
});

export default userSlice.reducer;

export const { setUser, setToken } = userSlice.actions;
