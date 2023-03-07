/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-02-26 19:58:22
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-02 15:22:33
 * @FilePath: \minibbsReact\config\config.ts
 * @Description: 配置文件，与.umirc.ts二选一
 */
import { defineConfig } from "umi";
import routes from './routes'

export default defineConfig({
  hash: true, // 开启 hash 模式，让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存
  routes: routes,
  npmClient: 'pnpm',
  plugins: [
    '@umijs/plugin-antd-mobile',
    '@umijs/plugins/dist/dva',
  ],
  dva: {}
});
