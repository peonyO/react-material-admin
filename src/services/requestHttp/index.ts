import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { enqueueSnackbar } from "notistack";
import { ResultEnum } from "@/enums/httpEnum";
import { CustomAxiosRequestConfig, RequestConfig } from "../interface/requestHttp";
import { AxiosCanceler } from "./helpers/axiosCancel";
import { showFullScreenLoading, tryHideFullScreenLoading } from "./helpers/loading";
import { getStorage, removeStorage } from "@/utils";
import { checkStatus } from "./helpers/checkStatus";

const axiosCanceler = new AxiosCanceler();

class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    /**
     * @description 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的 token,存储到 zustand本地储存当中
     */
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        // 重复请求不需要取消，在 api 服务中通过指定的第三个参数: { cancel: false } 来控制
        config.cancel ?? (config.cancel = true);
        config.cancel && axiosCanceler.addPending(config);
        // 当前请求不需要显示 loading，在 api 服务中通过指定的第三个参数: { loading: false } 来控制
        config.loading && showFullScreenLoading();
        if (config.headers && typeof config.headers.set === "function") {
          const tokenInfo = getStorage("tokenInfo");
          tokenInfo && config.headers.set("x-access-token", tokenInfo.token);
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    /**
     * @description response interceptor
     *  The server returns the information -> [intercept unified processing] -> the client JS gets the information
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response;
        axiosCanceler.removePending(config);
        tryHideFullScreenLoading();
        // login failure
        if (data.code == ResultEnum.OVERDUE) {
          removeStorage("tokenInfo");
          enqueueSnackbar({ variant: "error", message: "登录信息失效，请重新登录" });
          // window.$navigate(LOGIN_URL);
          return Promise.reject(data);
        }
        // Global error information interception (to prevent data stream from being returned when downloading files, and report errors directly without code)
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          enqueueSnackbar({ variant: "error", message: data.msg });
          return Promise.reject(data);
        }
        // Successful request (no need to handle failure logic on the page unless there are special circumstances)
        return data;
      },
      async (error: AxiosError) => {
        const { response } = error;
        tryHideFullScreenLoading();
        // Request timeout && network error judged separately, no response
        if (error.message.indexOf("timeout") !== -1) enqueueSnackbar({ variant: "error", message: "请求超时！请您稍后重试" });
        if (error.message.indexOf("Network Error") !== -1)
          enqueueSnackbar({ variant: "error", message: "网络错误！请您稍后重试" });
        // Do different processing according to the error status code of the server response
        if (response) checkStatus(response.status);
        // The server does not return any results (maybe the server is wrong or the client is disconnected from the network), disconnection processing: you can jump to the disconnection page
        // if (!window.navigator.onLine) window.$navigate("/500");
        return Promise.reject(error);
      }
    );
  }

  request({
    url,
    path,
    params,
    data,
    method = "GET",
    showDialog = true,
    loading = true,
    cancel = true
  }: RequestConfig): Promise<any> {
    const serviceUrl = url || import.meta.env.VITE_SERVICE_URL + path;
    return this.service({ url: serviceUrl, method, params, data, showDialog, loading, cancel } as CustomAxiosRequestConfig);
  }
}

export default new RequestHttp({
  // 默认地址请求地址，可以在.env.**文件中修改。
  baseURL: import.meta.env.VITE_SERVICE_URL,
  // timeout
  timeout: ResultEnum.TIMEOUT as number,
  // 凭据可以跨域携带
  withCredentials: false
}).request;
