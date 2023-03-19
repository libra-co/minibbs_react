/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:09:53
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 20:16:01
 * @FilePath: \MINIBBS_REACT\config\routes.ts
 * @Description: routes
 */

import routers from '../src/utils/routers'
import userCenter from './routes/userCenter'
import userProfile from './routes/userProfile'

const layoutsRoutes = [
    {
        path: routers.home,
        component: '@/pages/Home'
    },
    ...userCenter,
    ...userProfile,
]

export default [
    {
        path: routers.login,
        component: '@/pages/Login',
    },
    {
        path: '*',
        redirect: routers.login,

    },
    {
        component: '@/layouts/index',
        routes: [...layoutsRoutes],
    },
]