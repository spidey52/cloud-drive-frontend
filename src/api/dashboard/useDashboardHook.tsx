import axios from "axios";
import { dashboardUrl } from "../../utils/apiEndpoint";
import { useQuery } from "@tanstack/react-query";
import { Folder, File } from "../../types";

export type DashboardResponse = {
 folders: Folder[];
 files: File[];
};

type DashboardHookParams = {
 folderId?: string;
};

export const useDashboardHook = ({ folderId }: DashboardHookParams) => {
 const params: any = {};

 if (folderId) {
  params.folderId = folderId;
 }

 const fetchDashboard = async () => {
  return await axios.get(dashboardUrl, { params });
 };

 return useQuery(["dashboard", folderId], fetchDashboard, {
  refetchOnWindowFocus: true,
  select: (data) => data.data as DashboardResponse,
 });
};
