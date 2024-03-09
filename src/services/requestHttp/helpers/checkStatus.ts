import { enqueueSnackbar } from "notistack";

/**
 * @description: Verify network request status code
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number) => {
  switch (status) {
    case 400:
      enqueueSnackbar({ variant: "error", message: "请求失败！请您稍后重试" });
      break;
    case 401:
      enqueueSnackbar({ variant: "error", message: "登录失效！请您重新登录" });
      break;
    case 403:
      enqueueSnackbar({ variant: "error", message: "当前账号无权限访问！" });
      break;
    case 404:
      enqueueSnackbar({ variant: "error", message: "你所访问的资源不存在！" });
      break;
    case 405:
      enqueueSnackbar({ variant: "error", message: "请求方式错误！请您稍后重试" });
      break;
    case 408:
      enqueueSnackbar({ variant: "error", message: "请求超时！请您稍后重试" });
      break;
    case 500:
      enqueueSnackbar({ variant: "error", message: "服务异常！" });
      break;
    case 502:
      enqueueSnackbar({ variant: "error", message: "网关错误！" });
      break;
    case 503:
      enqueueSnackbar({ variant: "error", message: "服务不可用！" });
      break;
    case 504:
      enqueueSnackbar({ variant: "error", message: "网关超时！" });
      break;
    default:
      enqueueSnackbar({ variant: "error", message: "请求失败！" });
  }
};
