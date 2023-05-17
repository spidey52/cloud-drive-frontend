import { Folder, More, MoreVert, } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

type Props = {};

const FolderList = (props: Props) => {
 return (
  <Box
   sx={{
    // display: "flex",
    // flexDirection: "row",

       display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",

    gap: "1rem",
    padding: "10px",
		paddingLeft: 0,
		flexWrap: "wrap",
   }}
  >
   {Array(20)
    .fill(0)
    .map((el) => (
     <FolderItem />
    ))}
  </Box>
 );
};

const FolderItem = () => {
 return (
  <Box
   sx={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",

    "&:hover": {
     backgroundColor: "#ccc",
     cursor: "pointer",
    },
   }}
  >
   <Folder />
   <Box sx={{ flex: 1 }}>Folder Name</Box>
   <IconButton>
    <MoreVert />
   </IconButton>
  </Box>
 );
};

export default FolderList;
