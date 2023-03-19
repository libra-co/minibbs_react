/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:09:53
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 13:00:17
 * @FilePath: \MINIBBS_REACT\config\routes.ts
 * @Description: routes
 */

import routers from '../src/utils/routers'
// import routers from "@/utils/routers";


export default [
    {
        path: routers.login,
        component: '@/pages/Login',
    },
    {
        path: routers.home,
        component: '@/pages/Home'
    },
    {
        path: routers.user_center,
        component: '@/pages/UserCenter'
    },
    {
        path: '/',
        component: '@/pages/Login',

    }
]