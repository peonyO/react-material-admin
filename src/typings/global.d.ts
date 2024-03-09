//#region User
declare interface TokenInfo {
  expireTime: number;
  login: boolean;
  token: string;
}

declare interface MenuItems {
  pagePath: "string";
  icon?: "string";
  title: "string";
  dirPath: "string";
  id: "string";
  isFull: boolean;
  isHide: boolean;
  children?: MenuItems[];
}

declare interface UserInfo {
  nickname: string;
  menuList: MenuItems[];
}
//#endregion

//#region global loaderData
declare interface DefaultLoaderData {
  title?: string;
}
//#endregion
