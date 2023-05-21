import { ContentCut, CreateNewFolder, DriveFolderUpload, FileUpload, UploadFile } from "@mui/icons-material";
import { ListItemIcon, Divider, ListItemText, Menu, MenuItem, MenuList, Typography } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { setNewFolder } from "../store/slices/modal.slice";

type NewMenuItemProps = {
 anchorEl: null | HTMLElement;
 setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
};

const NewMenuItem = ({ anchorEl, setAnchorEl }: NewMenuItemProps) => {
 const open = Boolean(anchorEl);

 const dispatch = useAppDispatch();

 const handleClose = () => {
  setAnchorEl(null);
 };

 const handleNewFolder = () => {
  handleClose();
  dispatch(setNewFolder(true));
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
      {/* <Typography variant='body2' color='text.secondary'>
       ⌘X
      </Typography> */}
     </MenuItem>

     <Divider />

     <MenuItem
      onClick={handleClose}
      sx={{
       minWidth: "240px",
      }}
     >
      <ListItemIcon>
       <UploadFile fontSize='small' />
      </ListItemIcon>
      <ListItemText>File Upload</ListItemText>
      {/* <Typography variant='body2' color='text.secondary'>
       CTRL + N
      </Typography> */}
     </MenuItem>

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

      {/* <Typography variant='body2' color='text.secondary'>
       ⌘X
      </Typography> */}
     </MenuItem>
    </MenuList>
   </Menu>
  </>
 );
};

export default NewMenuItem;
