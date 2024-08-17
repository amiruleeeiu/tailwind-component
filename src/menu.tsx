interface MenuType {
  path: string;
  text: string;
  roles: string[];
}

export const fileUpload: MenuType = {
  path: "file-upload",
  text: "File Upload",
  roles: ["USER"],
};
