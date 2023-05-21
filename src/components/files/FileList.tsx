import { Folder, MoreVert } from "@mui/icons-material";
import { Box, Icon, IconButton, Paper, SvgIcon, Tooltip } from "@mui/material";
import { File } from "../../types";
import iconsMapping from "../../utils/iconsMapping";
import { useAppDispatch } from "../../store/hooks";
import { setImage, setPdf, setText } from "../../store/slices/modal.slice";
import { getFileType, getFileIcon } from "../../utils/fileHelper";
import { fileUrl } from "../../utils/apiEndpoint";

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

const FileItem = ({ file }: FileItemProps) => {
 const dispatch = useAppDispatch();

 const handleFileClick = () => {
  if (getFileType(file.file_type) === "image") {
   dispatch(setImage(file._id));
  }

  if (getFileType(file.file_type) === "text") {
   dispatch(setText(file));
  }

  if (getFileType(file.file_type) === "pdf") {
   window.open(`${fileUrl}/${file._id}`);
  }
 };

 return (
  <Box
   onClick={handleFileClick}
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
     <img src={iconsMapping[file.file_type as keyof typeof iconsMapping]} alt='file icon' />
    </Icon>

    <Tooltip title={file.name} arrow>
     <Box
      sx={{
       flex: 1,
       overflow: "hidden",
       textOverflow: "ellipsis",
      }}
     >
      {file.name}
     </Box>
    </Tooltip>
    <IconButton>
     <MoreVert />
    </IconButton>
   </Box>

   <Box
    className='file-icon'
    sx={{
     backgroundImage: `url(${getFileIcon(file.file_type)})`,
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
