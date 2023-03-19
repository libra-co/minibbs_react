/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-19 19:51:46
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 20:24:17
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
        ]
    }
]

export interface UserProfile {
    user_profile: string
}