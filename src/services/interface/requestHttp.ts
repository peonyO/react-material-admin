import { InternalAxiosRequestConfig, Method } from "axios";

export interface ExtendsAxiosRequestConfig {
  loading?: boolean;
  cancel?: boolean;
  showDialog?: boolean;
}

export type CustomAxiosRequestConfig = ExtendsAxiosRequestConfig & InternalAxiosRequestConfig;

export interface RequestConfig extends ExtendsAxiosRequestConfig {
  url?: string;
  path?: string;
  params?: any;
  data?: any;
  method?: Method;
}

export interface ServiceResponse<R> {
  code: number;
  message: string;
  result: R;
}

export type ServicePromise<R> = Promise<ServiceResponse<R>>;
export type Service1<R> = () => ServicePromise<R>;
export type Service2<R, D> = (data: D) => ServicePromise<R>;
export type Service3<R, D, P> = (data: D, params: P) => ServicePromise<R>;
export type Service<R, D = null, P = null> = D extends null ? Service1<R> : P extends null ? Service2<R, D> : Service3<R, D, P>;
