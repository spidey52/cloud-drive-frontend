import { Folder, MoreVert } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

type Props = {};

const FileList = (props: Props) => {
 return (
  <Box
   sx={{
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
     <FileItem />
    ))}
  </Box>
 );
};

const FileItem = () => {
 return (
  <Box
   sx={{
    width: 250,
    height: 250,
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
     backgroundColor: "#ccc",
     cursor: "pointer",
    },
   }}
  >
   <Box
    sx={{
     display: "flex",
     alignItems: "center",
     gap: "10px",
    }}
   >
    <Folder />
    <Box sx={{ flex: 1 }}>File Name</Box>
    <IconButton>
     <MoreVert />
    </IconButton>
   </Box>

   <Box
    sx={{
     backgroundColor: "#fff",
     borderRadius: "5px",
     margin: "2px",
     flex: 1,
    }}
   ></Box>
  </Box>
 );
};

export default FileList;
