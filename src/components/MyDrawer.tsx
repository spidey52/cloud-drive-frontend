import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import { Button, Menu, MenuItem } from "@mui/material";
import { Add } from "@mui/icons-material";
import NewMenuItem from "./NewMenuItem";

const drawerWidth = 240;

export const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(({ theme, open }) => ({
 flexGrow: 1,
 padding: theme.spacing(3),
 transition: theme.transitions.create("margin", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 marginLeft: `-${drawerWidth}px`,
 ...(open && {
  transition: theme.transitions.create("margin", {
   easing: theme.transitions.easing.easeOut,
   duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: 0,
 }),
}));

interface AppBarProps extends MuiAppBarProps {
 open?: boolean;
}

export const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== "open" })<AppBarProps>(({ theme, open }) => ({
 transition: theme.transitions.create(["margin", "width"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 ...(open && {
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
  transition: theme.transitions.create(["margin", "width"], {
   easing: theme.transitions.easing.easeOut,
   duration: theme.transitions.duration.enteringScreen,
  }),
 }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
 display: "flex",
 alignItems: "center",
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
 justifyContent: "flex-end",
}));

type Props = {
 open: boolean;
 setOpen: (open: boolean) => void;
};

export default function MyDrawer({ open, setOpen }: Props) {
 const theme = useTheme();

 const handleDrawerOpen = () => {
  setOpen(true);
 };

 const handleDrawerClose = () => {
  setOpen(false);
 };

 return (
  <Box sx={{ display: "flex" }}>
   <CssBaseline />
   <AppBar position='fixed' open={open}>
    <Toolbar>
     <IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' sx={{ mr: 2, ...(open && { display: "none" }) }}>
      <MenuIcon />
     </IconButton>
     <Typography variant='h6' noWrap component='div'>
      My Drive
     </Typography>
    </Toolbar>
   </AppBar>
   <Drawer
    sx={{
     width: drawerWidth,
     flexShrink: 0,
     "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
     },
    }}
    variant='persistent'
    anchor='left'
    open={open}
   >
    <DrawerHeader>
     <IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
    </DrawerHeader>
    <Divider />

    <SideBarNewButton />

    <List>
     {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
      <ListItem key={text} disablePadding>
       <ListItemButton>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
       </ListItemButton>
      </ListItem>
     ))}
    </List>
    <Divider />
    {/* FIXME: update routes here  */}
    <List>
     {["All mail", "Trash", "Spam"].map((text, index) => (
      <ListItem key={text} disablePadding>
       <ListItemButton>
        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
        <ListItemText primary={text} />
       </ListItemButton>
      </ListItem>
     ))}
    </List>
   </Drawer>
  </Box>
 );
}

const SideBarNewButton = () => {
 const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

 const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
 };

 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
   }}
  >
   <Button
    onClick={handleClick}
    startIcon={<Add />}
    variant='contained'
    sx={{
     borderRadius: "50px",
     padding: "10px 20px",
     backgroundColor: "#fff",
     color: "#000",

     "&:hover": {
      backgroundColor: "#ccc",
     },
    }}
   >
    New
   </Button>
   <NewMenuItem anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
  </Box>
 );
};
