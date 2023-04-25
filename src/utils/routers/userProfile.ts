/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-19 19:51:46
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 15:34:49
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
                value: '/user_article',
            },
            {
                name: 'user_reply',
                value: '/user_reply/:uid',
            },
            {
                name: 'user_bookmark',
                value: '/user_bookmark/:uid',
            },
            {
                name: 'user_mail',
                value: '/user_mail',
            },
            {
                name: 'user_coin_record_detail',
                value: '/user_coin_record_detail',
            },
        ]
    }
]

export interface UserProfile {
    user_profile: string
    user_detail_profile: string
    user_article: string
    user_reply: string
    user_bookmark: string
    user_mail: string
    user_coin_record_detail: string
}