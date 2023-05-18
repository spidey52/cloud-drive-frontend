import { Box, Typography, Link } from "@mui/material";
import React, { useEffect } from "react";
import MyDrawer, { DrawerHeader, Main } from "./MyDrawer";
import { Link as RouterLink, Outlet, redirect, useLocation, useOutlet } from "react-router-dom";
import { Height } from "@mui/icons-material";

type Props = {};

const Layout = () => {
 const location = useLocation();
 const outlet = useOutlet();

 const [open, setOpen] = React.useState(true);

 return (
  <Box sx={{ display: "flex" }}>
   <MyDrawer open={open} setOpen={setOpen} />
   <Main open={open}>
    <DrawerHeader />
    <Box sx={{ border: "", height: "calc(100vh - 164px)" }}>{outlet ? <Outlet /> : <PageNotFound />}</Box>
   </Main>
  </Box>
 );
};

const PageNotFound = () => {
 return (
  <Box
   sx={{
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
   }}
  >
   <Box>
    <img
     src='/404.jpg'
     alt='404 not found'
     style={{
      width: "400px",
      height: "400px",
     }}
    />
   </Box>

   <Link to='/dashboard' component={RouterLink}>
    Go to Dashboard
   </Link>
  </Box>
 );
};

export default Layout;
