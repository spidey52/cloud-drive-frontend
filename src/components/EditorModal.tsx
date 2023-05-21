import { Editor } from "@monaco-editor/react";
import { Box, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useFileGetHook } from "../api/folder/useFolderHook";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setText } from "../store/slices/modal.slice";
import { getProgrammingLanguage } from "../utils/fileHelper";
import { Refresh, Save } from "@mui/icons-material";

type Props = {};

const EditorModal = (props: Props) => {
 const [value, setValue] = React.useState("");
 const { text } = useAppSelector((state) => state.modal);
 const dispatch = useAppDispatch();

 const open = useMemo(() => !!text, [text]);
 const { data } = useFileGetHook(text?._id || "");

 const handleClose = () => {
  dispatch(setText(null));
 };

 useEffect(() => {
  if (data) {
   setValue(data);
  }
 }, [data]);

 const handleSave = () => {};

 return (
  <Box>
   <Dialog open={open} fullWidth maxWidth='xl'>
    <DialogTitle>
     <Box sx={{ display: "flex" }}>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
       {text?.name}
      </Typography>

      <Stack direction='row' spacing={0}>
       <IconButton onClick={handleSave} color='primary'>
        <Save />
       </IconButton>

       <IconButton color='primary'>
        <Refresh />
       </IconButton>
      </Stack>
     </Box>
    </DialogTitle>

    <DialogContent dividers>
     <Editor height='75vh' defaultLanguage='javascript' defaultValue='// some comment' value={value} language={getProgrammingLanguage(text?.file_type || "") || "javascript"} theme='vs-dark' />
    </DialogContent>

    <DialogActions>
     <Button onClick={handleClose}>close</Button>
    </DialogActions>
   </Dialog>
  </Box>
 );
};

export default EditorModal;
