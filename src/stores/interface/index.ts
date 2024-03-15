//#region UserStore 用户模块
export interface UserState {
  userInfo: UserInfo | null;
}

export interface UserAction {
  setUserInfo: (token: UserState["userInfo"]) => void;
}
//#endregion

//#region useAppConfig 系统配置
export interface AppConfigState {
  /** vertical 垂直; horizontal 水平 */
  menuMode: "vertical" | "horizontal";
  /** default 展开; collapsed 收缩; */
  menuAsideStatus: "default" | "collapsed";
  /** 主题色 */
  themeColor: string;
}

export interface AppConfigAction {
  switchMenuMode: () => void;
  switchMenuAsideStatus: () => void;
  changeThemeColor: (color: string) => void;
}
//#endregion
