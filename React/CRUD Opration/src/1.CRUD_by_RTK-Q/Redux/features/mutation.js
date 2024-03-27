import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userData",
  initialState: { userData: [], pending: false, errorMsg: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FatchUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.pending = false;
      })
      .addCase(FatchUserData.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(FatchUserData.rejected, (state, action) => {
        state.errorMsg = action.error.message;
        state.pending = false;
      });
  },
});

export default userSlice.reducer;
