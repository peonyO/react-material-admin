//#region User
declare interface TokenInfo {
  expireTime: number;
  login: boolean;
  token: string;
}

declare interface UserInfo {
  name: string;
  avatar: string;
}
//#endregion
