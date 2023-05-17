import { ViewSidebar } from "@mui/icons-material";

import { Box, Drawer } from "@mui/material";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import MyDrawer from "./components/Layout";
import Layout from "./components/Layout";
import NewFolder from "./components/NewFolder";

type Props = {};

const App = (props: Props) => {
 return (
  <>
   <Layout />

   {/* global  modals */}
   <NewFolder />
   {/* end of global modals */}
  </>
 );
};

export default App;
