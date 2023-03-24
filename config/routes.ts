/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:09:53
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-24 17:20:06
 * @FilePath: \MINIBBS_REACT\config\routes.ts
 * @Description: routes
 */

import routers from '../src/utils/routers'
import article from './routes/article'
import userCenter from './routes/userCenter'
import userProfile from './routes/userProfile'

const layoutsRoutes = [
    {
        path: routers.home,
        component: '@/pages/Home'
    },
    ...userCenter,
    ...userProfile,
    ...article,
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