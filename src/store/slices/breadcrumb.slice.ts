import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Folder } from "../../types";

type IBreadcrumb = {
 breadcrumbs: Folder[];
 breadcrumb: Folder | null;
};

const initialState: IBreadcrumb = {
 breadcrumbs: [],
 breadcrumb: null,
};

const breadcrumbSlice = createSlice({
 name: "breadcrumb",
 initialState,
 reducers: {
  addBreadcrumb: (store, action: PayloadAction<Folder>) => {
   store.breadcrumbs.push(action.payload);
   store.breadcrumb = action.payload;
  },

  removeBreadcrumb: (store, action: PayloadAction<string>) => {
   const index = store.breadcrumbs.findIndex((folder) => folder._id === action.payload);
   store.breadcrumbs = store.breadcrumbs.filter((_, i) => i <= index);
   store.breadcrumb = store.breadcrumbs[index];
  },

  removeAllBreadcrumb: (store) => {
   store.breadcrumbs = [];
   store.breadcrumb = null;
  },
 },
});

export const { addBreadcrumb, removeAllBreadcrumb, removeBreadcrumb } = breadcrumbSlice.actions;

export default breadcrumbSlice.reducer;
