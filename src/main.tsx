import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// font family
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import { Provider } from "react-redux";
import store from "./store/store";
import MyDrawer from "./components/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
 [
  {
   path: "/",
   element: <App />,
   children: [
    {
     path: "/dashboard",
     element: <HomePage />,
    },
   ],
  },
  {
   path: "/login",
   element: <LoginPage />,
  },
 ],
 {
  basename: "/drive",
 }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 <React.StrictMode>
  <Provider store={store}>
   <RouterProvider router={router} />
  </Provider>
 </React.StrictMode>
);
