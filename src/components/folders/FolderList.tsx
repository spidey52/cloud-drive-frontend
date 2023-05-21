import { Folder as FolderIcon, More, MoreVert } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { useDashboardHook } from "../../api/dashboard/useDashboardHook";
import { Folder } from "../../types";
import { useAppDispatch } from "../../store/hooks";
import { addBreadcrumb } from "../../store/slices/breadcrumb.slice";

type Props = {
 folders: Folder[];
};

const FolderList = (props: Props) => {
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
   {props.folders.map((el) => (
    <FolderItem key={el._id} folder={el} />
   ))}
  </Box>
 );
};

type FolderItemProps = {
 folder: Folder;
};

const FolderItem = (props: FolderItemProps) => {
 const dispatch = useAppDispatch();

 const handleDoubleClick = () => {
  dispatch(addBreadcrumb(props.folder));
 };

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
    userSelect: "none",
   }}
   onDoubleClick={handleDoubleClick}
  >
   <FolderIcon />
   <Box sx={{ flex: 1 }}>{props.folder.name}</Box>
   <IconButton>
    <MoreVert />
   </IconButton>
  </Box>
 );
};

export default FolderList;
