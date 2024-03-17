import service from "../requestHttp";
import { LoginData } from "../interface/user";
import { Service } from "../interface/requestHttp";

/** 登录 */
export const LoginService: Service<TokenInfo, LoginData> = data => {
  return service.post({
    path: "/user/login",
    data
  });
};

/** 获取用户信息 */
export const getUserInfoService: Service<UserInfo> = () => {
  return service.get({
    path: "/user/info"
  });
};

/** 获取按钮权限集合 */
export const getButtonListService: Service<string[]> = () => {
  return service.get({
    path: "/auth/buttons"
  });
};
