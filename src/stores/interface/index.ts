//#region UserState
export interface UserState {
  userInfo: UserInfo | null;
}

export interface UserAction {
  setUserInfo: (token: UserState["userInfo"]) => void;
}
//#endregion
