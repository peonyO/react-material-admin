import viteCompression from "vite-plugin-compression";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { checker } from "vite-plugin-checker";
import { PluginOption } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react-swc";

/**
 * Create vite plugin
 * @param viteEnv
 */
export const createVitePlugins = (viteEnv: ViteEnv): (PluginOption | PluginOption[])[] => {
  const { VITE_REPORT } = viteEnv;

  return [
    react(),
    // 自动拆分打包文件
    chunkSplitPlugin({ strategy: "unbundle" }),
    // esLint错误消息显示在浏览器界面上
    checker({ typescript: true }),
    // 创建打包的压缩配置
    createCompression(viteEnv),
    // 是否生成包预览，分析依赖包大小以进行优化
    VITE_REPORT && (visualizer({ filename: "stats.html", gzipSize: true, brotliSize: true }) as PluginOption)
  ];
};

/**
 * 根据压缩配置生成不同的压缩规则
 * @param viteEnv
 */
const createCompression = (viteEnv: ViteEnv): PluginOption | PluginOption[] => {
  const { VITE_BUILD_COMPRESS = "none", VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  const compressList = VITE_BUILD_COMPRESS.split(",");
  const plugins: PluginOption[] = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      viteCompression({
        ext: ".gz",
        algorithm: "gzip",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      viteCompression({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  return plugins;
};
