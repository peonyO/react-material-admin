/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 项目名称
  VITE_APP_NAME: string;
  // 当前环境 开发：dev 测试：test 生产 ""
  VITE_ENV: "dev" | "test" | "";
  // api 接口地址
  VITE_SERVICE_URL: string;
}
