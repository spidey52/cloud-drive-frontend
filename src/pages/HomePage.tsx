import { Box, CircularProgress, Drawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import FolderList from "../components/folders/FolderList";
import FileList from "../components/files/FileList";
import MyBreadCrumb from "../components/MyBreadcrumb/MyBreadCrumb";
import { useDashboardHook } from "../api/dashboard/useDashboardHook";
import { useAppSelector } from "../store/hooks";
import iconsMapping from "../utils/iconsMapping";

type Props = {};

const HomePage = (props: Props) => {
 const [list, setList] = useState<string[]>([]);

 const { breadcrumb } = useAppSelector((state) => state.breadcrumb);

 const { data, isLoading, isRefetching } = useDashboardHook({ folderId: breadcrumb?._id });

 useEffect(() => {
  setList(["Home", "Folder1", "Folder2", "Folder3"]);
 }, []);

 const handleClick = (el: string) => {};

 return (
  <Box>
   <MyBreadCrumb list={list} handleClick={handleClick} />

   {isLoading ? (
    <Box
     sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40px",
     }}
    >
     <CircularProgress />
    </Box>
   ) : (
    <>
     {data?.folders.length ? <Title title='Folders' /> : null}
     <FolderList folders={data?.folders || []} />

     {data?.files.length ? <Title title='Files' /> : null}
     <FileList files={data?.files || []} />
    </>
   )}
  </Box>
 );
};

export default HomePage;
