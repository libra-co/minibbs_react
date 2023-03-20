/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-19 19:51:46
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-20 16:27:49
 * @FilePath: \MINIBBS_REACT\src\utils\routers\userProfile.ts
 * @Description: 用户空间
 */
export default [
    {
        module: '/user_profile',
        paths: [
            {
                name: 'user_profile',
                value: '/:uid',
            },
            {
                name: 'user_detail_profile',
                value: '/user_detail_profile/:uid',
            },
            {
                name: 'user_article',
                value: '/user_article/:uid',
            },
        ]
    }
]

export interface UserProfile {
    user_profile: string
    user_detail_profile: string
    user_article: string
}