import { Folder, MoreVert } from "@mui/icons-material";
import { Box, Icon, IconButton, Paper, SvgIcon, Tooltip } from "@mui/material";
import { File } from "../../types";
import iconsMapping from "../../utils/iconsMapping";

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
 //  return (
 //   <div className="file-container">
 //    <div className='upper-section'></div>
 //    <div className='icon-section'></div>
 //   </div>
 //  );

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
     justifyContent: "center",
     gap: "10px",
    }}
   >
    <Icon
     fontSize='medium'
     sx={{
      color: "#000",
      paddingBottom: "30px",
     }}
    >
     <img src={iconsMapping[props.file.file_type as keyof typeof iconsMapping]} alt='file icon' />
    </Icon>

    <Tooltip title={props.file.name} arrow>
     <Box
      sx={{
       flex: 1,
       overflow: "hidden",
       textOverflow: "ellipsis",
      }}
     >
      {props.file.name}
     </Box>
    </Tooltip>
    <IconButton>
     <MoreVert />
    </IconButton>
   </Box>

   <Box
    className='file-icon'
    sx={{
     backgroundImage: `url(${iconsMapping[props.file.file_type as keyof typeof iconsMapping]})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "contain",
     backgroundPosition: "center",
     flex: 1,
    }}
   ></Box>
  </Box>
 );
};

export default FileList;
