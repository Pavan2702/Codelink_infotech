import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: UserData[];
}

const initialState: UserState = {
  userData: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<UserData[]>) => {
      state.userData = action.payload;
    },
    addRdata: (state, action: PayloadAction<UserData>) => {
      state.userData.push(action.payload);
    },
    updateRdata: (state, action: PayloadAction<{ id: string; newData: Partial<UserData> }>) => {
      const { id, newData } = action.payload;
      const index = state.userData.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.userData[index] = { ...state.userData[index], ...newData };
      }
    },
    deleteRdata: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.userData = state.userData.filter((user) => user.id !== id);
    },
  },
});

export const {
  setData,
  addRdata,
  updateRdata,
  deleteRdata,
} = userSlice.actions;

export default userSlice.reducer;