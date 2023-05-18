import { Box, Drawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import FolderList from "../components/folders/FolderList";
import FileList from "../components/files/FileList";
import MyBreadCrumb from "../components/MyBreadcrumb/MyBreadCrumb";
import { useDashboardHook } from "../api/dashboard/useDashboardHook";

type Props = {};

const HomePage = (props: Props) => {
 const [list, setList] = useState<string[]>([]);
 const [isCollpsible, setIsCollapsible] = useState<boolean>(true);

 const { data } = useDashboardHook();

 console.log(data);

 useEffect(() => {
  setList(["Home", "Folder1", "Folder2", "Folder3"]);
 }, []);

 const handleClick = (el: string) => {};

 return (
  <Box>
   <MyBreadCrumb list={list} handleClick={handleClick} />

   <Title title='Folders' />
   <FolderList folders={data?.folders || []} />

   <Title title='Files' />
   <FileList files={data?.files || []} />
  </Box>
 );
};

export default HomePage;
