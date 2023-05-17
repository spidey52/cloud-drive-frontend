import { Box, Dialog, Button, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setNewFolder } from "../store/slices/modal.slice";

type Props = {};

const NewFolder = (props: Props) => {
 const { newFolder } = useAppSelector((state) => state.modal);
 const dispatch = useAppDispatch();

 const [folderName, setFolderName] = useState<string>("");

 const handleClose = () => {
  dispatch(setNewFolder(false));
 };

	const handleCreate = () => { }

 return (
  <Dialog open={newFolder}>
   <DialogTitle>New Folder</DialogTitle>

   <DialogContent>
    <Box
     sx={{
      width: 300,
      pt: 1,
     }}
    >
     <TextField label='Folder Name' fullWidth value={folderName} onChange={(e) => setFolderName(e.target.value)} />
    </Box>
   </DialogContent>

   <DialogActions
    sx={{
     pr: 2,
    }}
   >
    <Button onClick={handleClose}>cancel</Button>
    <Button onClick={handleCreate} disabled={!folderName}>
     create
    </Button>
   </DialogActions>
  </Dialog>
 );
};

export default NewFolder;
