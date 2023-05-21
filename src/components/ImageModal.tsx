import React, { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Dialog, DialogContent, DialogTitle, Modal } from "@mui/material";
import { Image } from "@mui/icons-material";
import { useFileGetHook } from "../api/folder/useFolderHook";
import { setImage } from "../store/slices/modal.slice";
import { fileUrl } from "../utils/apiEndpoint";

type Props = {};

const ImageModal = (props: Props) => {
 const { image } = useAppSelector((state) => state.modal);

 const dispatch = useAppDispatch();
 const open = useMemo(() => !!image, [image]);

 const handleClose = () => {
  dispatch(setImage(""));
 };

 return (
  <Dialog
   open={open}
   onClose={handleClose}
   maxWidth='xl'
   sx={{
    backgroundColor: "rgba(0,0,0,0.2)",
    "& .modal-image": {
     width: "100%",
     height: "100%",
     objectFit: "contain",
    },
   }}
  >
   <DialogTitle>image</DialogTitle>

   <DialogContent>
    <img src={fileUrl + "/" + image} alt={"image"} className='modal-image' />
   </DialogContent>
  </Dialog>
 );
};

export default ImageModal;
