/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-23 14:16:25
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 14:24:24
 * @FilePath: /minibbs_react/src/utils/routers/user.ts
 * @Description: user routers
 */

import { Routers } from './const';

const User: Routers[] = [
  {
    module: '', // 填写一级菜单路由
    name: '登录', // 模块名字
    path: [
      { name: '', value: '' }, // 该路由对应的名字,路由信息
    ],
  },
];

export default User;
