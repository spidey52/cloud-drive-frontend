import { CreateNewFolder, DriveFolderUpload, UploadFile } from "@mui/icons-material";
import { ListItemIcon, Divider, ListItemText, Menu, MenuItem, MenuList } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { setNewFolder } from "../store/slices/modal.slice";
import { useRef } from "react";
import { useFileUploadHook } from "../api/folder/useFolderHook";
import handleError from "../utils/handleError";
import { toast } from "react-toastify";

type NewMenuItemProps = {
 anchorEl: null | HTMLElement;
 setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
};

const NewMenuItem = ({ anchorEl, setAnchorEl }: NewMenuItemProps) => {
 const open = Boolean(anchorEl);

 const dispatch = useAppDispatch();

 const fileRef = useRef<HTMLInputElement>(null);
 const uploadFile = useFileUploadHook();

 const handleClose = () => {
  setAnchorEl(null);
 };

 const handleNewFolder = () => {
  handleClose();
  dispatch(setNewFolder(true));
 };

 const handleFileUpload = async () => {
  if (!fileRef.current) return;

  try {
   const file = fileRef.current.files?.[0];

   if (!file) return;

   const formData = new FormData();
   formData.append("file", file);

   await uploadFile.mutateAsync(formData);
   toast.success("File uploaded successfully");
  } catch (error) {
   handleError(error);
  }

  handleClose();
 };

 return (
  <>
   <Menu
    id='basic-menu'
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
     "aria-labelledby": "basic-button",
    }}
   >
    <MenuList>
     <MenuItem
      onClick={handleNewFolder}
      sx={{
       minWidth: "240px",
      }}
     >
      <ListItemIcon>
       <CreateNewFolder fontSize='small' />
      </ListItemIcon>
      <ListItemText>New Folder</ListItemText>
     </MenuItem>

     <Divider />

     <input type='file' style={{ display: "none" }} id='file-item' ref={fileRef} onChange={handleFileUpload} />

     <label htmlFor='file-item'>
      <MenuItem onClick={handleFileUpload} sx={{ minWidth: "240px" }}>
       <ListItemIcon>
        <UploadFile fontSize='small' />
       </ListItemIcon>
       <ListItemText>File Upload</ListItemText>
      </MenuItem>
     </label>

     <MenuItem
      onClick={handleClose}
      sx={{
       minWidth: "240px",
      }}
     >
      <ListItemIcon>
       <DriveFolderUpload fontSize='small' />
      </ListItemIcon>
      <ListItemText>Folder Upload</ListItemText>
     </MenuItem>
    </MenuList>
   </Menu>
  </>
 );
};

export default NewMenuItem;
