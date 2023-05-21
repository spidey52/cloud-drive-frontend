import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.slice";
import modalSlice from "./slices/modal.slice";
import breadcrumbSlice from "./slices/breadcrumb.slice";
// import rootReducer from "./reducers";

const store = configureStore({
 reducer: {
  users: userSlice,
  modal: modalSlice,
  breadcrumb: breadcrumbSlice,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
