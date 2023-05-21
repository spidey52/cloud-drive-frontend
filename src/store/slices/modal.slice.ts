import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { File } from "../../types";

type ModalState = {
 newFolder: boolean;
 image: string | null;
 text: File | null;
 pdf: File | null;
};

const initialState: ModalState = {
 newFolder: false,
 image: null,
 pdf: null,
 text: null,
};

const modalSlice = createSlice({
 name: "modal",
 initialState,
 reducers: {
  setNewFolder: (state, action: PayloadAction<boolean>) => {
   state.newFolder = action.payload;
  },
  setImage: (state, action: PayloadAction<string>) => {
   state.image = action.payload;
  },
  setText: (state, action: PayloadAction<File | null>) => {
   state.text = action.payload;
  },

  setPdf: (state, action: PayloadAction<File | null>) => {
   state.pdf = action.payload;
  },
 },
});

export const { setNewFolder, setImage, setText, setPdf } = modalSlice.actions;

export default modalSlice.reducer;
