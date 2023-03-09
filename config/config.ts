/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-02-26 19:58:22
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-09 22:14:21
 * @FilePath: \minibbsReact\config\config.ts
 * @Description: 配置文件，与.umirc.ts二选一
 */
import { defineConfig } from "umi";
import proxy from "./proxy";
import routes from './routes'

export default defineConfig({
  hash: true, // 开启 hash 模式，让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存
  npmClient: 'pnpm',
  plugins: ['@umijs/plugins/dist/dva'],
  dva:{},
  proxy: {
    "/api": {
      // "target": 'http://139.155.5.202:3000/',
      "target": 'http://localhost:3000/',
      "changeOrigin": true,
      "pathRewrite": { "^/api/web": "" },
    }
  },
  routes: routes,
  alias: {
    '@': '../src',
    config: '/config',
    public: '/public',
  },
  manifest: {
    basePath: '/',
  },
  base: '/',
  publicPath: '/',
});
