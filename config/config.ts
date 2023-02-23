/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-22 10:23:06
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 15:06:03
 * @FilePath: /minibbs_react/config/config.ts
 * @Description: 配置文件，优先级弱于umirc.ts
 */

import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  routes: routes,
  mock: false, // 关闭mock
  fastRefresh: {}, // 开启快速刷新
  mfsu: {}, // 开启mfsu
  webpack5: {},
  manifest: {
    basePath: '/',
  },
  base: '/',
  publicPath: '/',
  alias: {
    config: '/config',
  },
});
