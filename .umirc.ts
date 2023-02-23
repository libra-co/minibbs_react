/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-22 09:24:57
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 15:28:12
 * @FilePath: /minibbs_react/.umirc.ts
 * @Description: 配置文件，包含 umi 内置功能和插件的配置
 */

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: routes,
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  antd: {
    mobile: false,
  },
});
