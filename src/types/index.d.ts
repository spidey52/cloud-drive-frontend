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
 file_type: string;
 location: string;
 parent: string | null;
 owner: string;
 createdAt: string;
 updatedAt: string;
};
