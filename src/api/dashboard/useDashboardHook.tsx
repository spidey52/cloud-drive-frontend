import axios from "axios";
import { dashboardUrl } from "../../utils/apiEndpoint";
import { useQuery } from "@tanstack/react-query";

export type Folder = {
 _id: string;
 name: string;
 parent: string | null;
 createdAt: string;
 updatedAt: string;
};

export type File = {
 _id: string;
 name: string;
 parent: string | null;
 owner: string;
 createdAt: string;
 updatedAt: string;
};

export type DashboardResponse = {
 folders: Folder[];
 files: any[];
};

export const useDashboardHook = () => {
 const fetchDashboard = async () => {
  return await axios.get(dashboardUrl);
 };

 return useQuery(["dashboard"], fetchDashboard, {
  refetchOnWindowFocus: true,
  select: (data) => data.data as DashboardResponse,
 });
};
