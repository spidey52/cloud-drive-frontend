import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { folderUrl } from "../../utils/apiEndpoint";

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
