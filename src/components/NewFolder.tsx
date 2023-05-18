import { Box, Dialog, Button, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setNewFolder } from "../store/slices/modal.slice";
import { useFolderCreateHook } from "../api/folder/useFolderHook";
import handleError from "../utils/handleError";

type Props = {};

const NewFolder = (props: Props) => {
 const { newFolder } = useAppSelector((state) => state.modal);
 const dispatch = useAppDispatch();
 const createFolder = useFolderCreateHook();

 const [folderName, setFolderName] = useState<string>("");

 const handleClose = () => {
  if (createFolder.isLoading) return;
  dispatch(setNewFolder(false));
 };

 const handleCreate = async () => {
  try {
   await createFolder.mutateAsync({ name: folderName, parent: null });
   handleClose();
  } catch (error) {
   handleError(error);
  }
 };

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
