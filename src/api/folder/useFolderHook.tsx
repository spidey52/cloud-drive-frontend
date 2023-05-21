import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { fileUrl, folderUrl } from "../../utils/apiEndpoint";

export type FolderForm = {
 name: string;
 parent: string | null;
};

export const useFolderCreateHook = () => {
 const createFolder = async (folder: FolderForm) => {
  return await axios.post(folderUrl, folder);
 };

 const queryClient = useQueryClient();

 return useMutation(createFolder, {
  onSuccess: () => {
   console.log("success");
   queryClient.invalidateQueries(["dashboard"]);
  },
 });
};

export const useFileUploadHook = () => {
 const uploadFile = async (formData: any) => {
  // const formData = new FormData();
  // formData.append("file", file);
  return await axios.post(fileUrl, formData);
 };

 const queryClient = useQueryClient();

 return useMutation(uploadFile, {
  onSuccess: () => {
   console.log("success");
   queryClient.invalidateQueries(["dashboard"]);
  },
 });
};

export const useFileGetHook = (id: string) => {
 const getFile = async () => {
  return await axios.get(`${fileUrl}/${id}`);
 };

 return useQuery(["file", id], getFile, {
  enabled: !!id,
  select: (res) => res.data,
 });
};
