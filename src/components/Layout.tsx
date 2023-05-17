import { Box, Typography } from "@mui/material";
import React from "react";
import MyDrawer, { DrawerHeader, Main } from "./MyDrawer";
import { Outlet, useOutlet } from "react-router-dom";

type Props = {};

const Layout = () => {
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
   }}
  >
   <img
    src='/404.jpg'
    alt='404 not found'
    style={{
    //  maxHeight: "100%",
			height: "100%",
			width: "100%",
			objectFit: "fill",
    }}
   />
  </Box>
 );
};

export default Layout;
