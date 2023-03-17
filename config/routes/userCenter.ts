/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-17 18:58:44
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-17 19:05:27
 * @FilePath: /minibbs_react/config/routes/usercenter.ts
 * @Description: 个人中心
 */

import routers from "@/utils/routers";

export const userCenter = [
    {
        path: routers.user_center,
        name: 'User Center',
        component: '@/pages/UserCenter',
    }
]