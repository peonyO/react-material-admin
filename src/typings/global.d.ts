//#region User
declare interface TokenInfo {
  expireTime: number;
  login: boolean;
  token: string;
}

declare interface MenuItems {
  pagePath: string;
  icon: string;
  title: string;
  dirPath: string;
  id: string;
  isFull: boolean;
  isHide: boolean;
  isLink: boolean;
  description: string;
  children?: MenuItems[];
}

declare interface UserInfo {
  nickname: string;
  menuList: MenuItems[];
}
//#endregion

//#region global loaderData
declare interface DefaultLoaderData {
  title?: string;
}
//#endregion

/* Vite */
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
  /** 项目名称 */
  VITE_APP_NAME: string;
  /** 当前环境 开发：dev 测试：test 生产 "" */
  VITE_ENV: "dev" | "test" | "";
  /** api 接口地址 */
  VITE_SERVICE_URL: string;
  /** 路由模式 */
  VITE_ROUTER_MODE: "hash" | "history";
  /** 是否打开浏览器 */
  VITE_OPEN: boolean;
  /** 打包后是否生成包分析文件 */
  VITE_REPORT: boolean;
  /** 打包以后是否文件格式 */
  VITE_BUILD_COMPRESS: "gzip" | "brotli" | "gzip,brotli" | "none";
  /** 是否删除源文件 */
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  /** 是否删除Console.log */
  VITE_DROP_CONSOLE: boolean;
  /** 公共路径 */
  VITE_PUBLIC_PATH: string;
  /** 请求后端api数组地址 */
  VITE_PROXY_URL: [string, string][];
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}

interface ViteOptions {
  __dirname: string;
}
