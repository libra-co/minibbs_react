/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:09:53
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-26 17:57:06
 * @FilePath: \MINIBBS_REACT\config\routes.ts
 * @Description: routes
 */

import routers from '../src/utils/routers'
import article from './routes/article'
import articleList from './routes/articleList'
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
    ...articleList,
]

export default [
    {
        path: routers.login,
        component: '@/pages/Login',
    },
    {
        component: '@/layouts/index',
        routes: [...layoutsRoutes],
    },
    {
        path: '*',
        redirect: routers.login,
    },
]