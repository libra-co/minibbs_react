/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-27 15:50:33
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-08 22:59:43
 * @FilePath: /minibbs_react/.umirc.ts
 * @Description: umi 配置， 优先级高于 config
 */
import { defineConfig } from "umi";

export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  // ],
  npmClient: 'pnpm',
  // proxy: proxy.dev
  // proxy: {
  //   "/api": {
  //     "target": 'http://139.155.5.202:3000/',
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/web": "" }
  //   }
  // },
});
