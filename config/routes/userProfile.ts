/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 09:46:22
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-20 16:20:21
 * @FilePath: /minibbs_react/config/routes/userProfile.ts
 * @Description: 用户空间
 */
import routers from "../../src/utils/routers";

export default [
    {
        path: routers.user_profile,
        name: 'User Profile',
        component: '@/pages/UserProfile',
    },
    {
        path: routers.user_detail_profile,
        name: 'User Detail Profile',
        component: '@/pages/UserProfile/UerDetailProfile',
    },
    {
        path: routers.user_article,
        name: 'User Article',
        component: '@/pages/UserProfile/UserArticle',
    },
]