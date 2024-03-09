import { Service } from "../interface/requestHttp";
import { LoginData } from "../interface/user";
import service from "../requestHttp";

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
