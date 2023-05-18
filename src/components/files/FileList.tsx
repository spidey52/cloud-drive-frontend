import { Folder, MoreVert } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { File } from "../../api/dashboard/useDashboardHook";

type Props = {
 files: File[];
};

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
   {props.files.map((el) => (
    <FileItem file={el} />
   ))}
  </Box>
 );
};

type FileItemProps = {
 file: File;
};

const FileItem = (props: FileItemProps) => {
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
    <Box sx={{ flex: 1 }}>{props.file.name}</Box>
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
