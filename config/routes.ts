/*
* @Author: liuhongbo liuhongbo@dip-ai.com
* @Date: 2023-02-27 20:45:04
* @LastEditors: liuhongbo liuhongbo@dip-ai.com
* @LastEditTime: 2023-02-28 16:48:28
* @FilePath: /minibbs_react/config/routes.ts
* @Description: routes
*/

import routers from "@/utils/routers";

export default [
    {
        path: routers.login,
        component: '@/Login',
    },
    {
        path: routers.home,
        component:'@/Home'
    }
]