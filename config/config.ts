/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-02-26 19:58:22
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-02-26 20:01:58
 * @FilePath: \minibbsReact\config\config.ts
 * @Description: 配置文件，与.umirc.ts二选一
 */
import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
