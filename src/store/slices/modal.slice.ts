import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
 newFolder: boolean;
};

const initialState: ModalState = {
 newFolder: false,
};

const modalSlice = createSlice({
 name: "modal",
 initialState,
 reducers: {
  setNewFolder: (state, action: PayloadAction<boolean>) => {
   state.newFolder = action.payload;
  },
 },
});

export const { setNewFolder } = modalSlice.actions;

export default modalSlice.reducer;
