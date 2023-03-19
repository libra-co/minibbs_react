/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-17 18:58:44
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 20:22:12
 * @FilePath: /minibbs_react/config/routes/usercenter.ts
 * @Description: 个人中心
 */

import routers from "../../src/utils/routers";

export default [
    {
        path: routers.user_center,
        name: 'User Center',
        component: '@/pages/UserCenter',
    }
]