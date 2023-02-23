/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-22 10:36:44
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 15:12:18
 * @FilePath: /minibbs_react/config/routes.ts
 * @Description: 路由文件
 */

import routers from '@/utils/routers';
console.log('routers', routers);
const routes = [
  { path: routers.login, name: 'login', component: '@/pages/Login' },
  {
    path: '*',
    redirect: '/tt',
  },
];

export default routes;
