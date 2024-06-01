import { enqueueSnackbar } from "notistack";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { getStorage, removeStorage } from "@/utils";
import { ResultEnum } from "@/enums/http";

import {
  CustomAxiosRequestConfig,
  CustomAxiosResponse,
  ExtendsAxiosRequestConfig,
  RequestConfig
} from "../interface/requestHttp";
import { showFullScreenLoading, tryHideFullScreenLoading } from "./helpers/loading";
import { checkStatus } from "./helpers/checkStatus";
import { AxiosCanceler } from "./helpers/axiosCancel";

const axiosCanceler = new AxiosCanceler();

class RequestHttp {
  service: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    /**
     * @description 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的 token,存储到 storage 里
     */
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        config.cancel ?? (config.cancel = true);
        config.cancel && axiosCanceler.addPending(config);
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
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response: CustomAxiosResponse) => {
        const { data, config } = response;
        axiosCanceler.removePending(config);
        tryHideFullScreenLoading();

        if (data.code == ResultEnum.OVERDUE) {
          removeStorage("tokenInfo");
          enqueueSnackbar({ variant: "error", message: "登录信息失效，请重新登录" });
          window.$navigate("/login");
          return Promise.reject(data);
        }

        if (data.code && data.code !== ResultEnum.SUCCESS) {
          if (config.showDialog) {
            enqueueSnackbar({ variant: "error", message: data.message });
          }
          return Promise.reject(data);
        }

        return data;
      },
      async (error: AxiosError) => {
        const { response } = error;
        tryHideFullScreenLoading();
        if (error.message.indexOf("timeout") !== -1)
          enqueueSnackbar({ variant: "error", message: "请求超时！请您稍后重试" });
        if (error.message.indexOf("Network Error") !== -1)
          enqueueSnackbar({ variant: "error", message: "网络错误！请您稍后重试" });
        if (response) checkStatus(response.status);
        if (!window.navigator.onLine) window.$navigate("/500");
        return Promise.reject(error);
      }
    );
  }

  get<R>({ url, path, params }: RequestConfig, config?: ExtendsAxiosRequestConfig): Promise<R> {
    const { showDialog, loading, cancel } = { showDialog: true, ...config };
    const serviceUrl = url || import.meta.env.VITE_SERVICE_URL + path;
    return this.service.get(serviceUrl, { params, showDialog, loading, cancel } as CustomAxiosRequestConfig);
  }

  post<R>({ url, path, data, params }: RequestConfig, config?: ExtendsAxiosRequestConfig): Promise<R> {
    const { showDialog, loading, cancel } = { showDialog: true, ...config };
    const serviceUrl = url || import.meta.env.VITE_SERVICE_URL + path;
    return this.service.post(serviceUrl, data, {
      params,
      showDialog,
      loading,
      cancel
    } as CustomAxiosRequestConfig);
  }

  delete<R>({ url, path, params }: RequestConfig, config?: ExtendsAxiosRequestConfig): Promise<R> {
    const { showDialog, loading, cancel } = { showDialog: true, ...config };
    const serviceUrl = url || import.meta.env.VITE_SERVICE_URL + path;
    return this.service.delete(serviceUrl, {
      params,
      showDialog,
      loading,
      cancel
    } as CustomAxiosRequestConfig);
  }

  put<R>({ url, path, data, params }: RequestConfig, config?: ExtendsAxiosRequestConfig): Promise<R> {
    const { showDialog, loading, cancel } = { showDialog: true, ...config };
    const serviceUrl = url || import.meta.env.VITE_SERVICE_URL + path;
    return this.service.put(serviceUrl, data, {
      params,
      showDialog,
      loading,
      cancel
    } as CustomAxiosRequestConfig);
  }
}

export default new RequestHttp({
  // timeout
  timeout: ResultEnum.TIMEOUT as number,
  // 凭据可以跨域携带
  withCredentials: false
});
