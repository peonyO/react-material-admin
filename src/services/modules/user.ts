import { Service } from "../interface/requestHttp";
import { LoginData } from "../interface/user";
import request from "../requestHttp";

/** 登录 */
export const LoginService: Service<TokenInfo, LoginData> = data => {
  return request({
    path: "/user/login",
    method: "POST",
    data
  });
};
