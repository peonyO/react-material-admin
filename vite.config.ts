import { resolve } from "node:path";

import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const mate = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      host: "0.0.0.0",
      port: 8888,
      open: true,
      cors: true,
      proxy: {
        "/api": {
          target: mate.VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    },
    plugins: [
      react(),
      // https://www.npmjs.com/package/vite-plugin-chunk-split
      // 自动拆分打包文件
      chunkSplitPlugin({ strategy: "unbundle" })
    ]
  };
});
