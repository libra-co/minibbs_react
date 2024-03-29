/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-27 20:47:43
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-24 16:11:10
 * @FilePath: /minibbs_react/src/utils/routers.ts
 * @Description: routers
 */

import article, { ArticleRouters } from "./routers/article"
import articleList, { ArticleListRouters } from "./routers/articleList"
import blockPage, { BlockPageRouters } from "./routers/blockPage"
import userCenter, { UserCenterRouters } from "./routers/userCenter"
import userProfile, { UserProfile } from "./routers/userProfile"

/**
 * @name 处理路由参数
 * @param pathName 路由名称
 * @param data 参数
 * @description url: /xxx/edit/:id/:type/content,  data: { id: 1234, type: 'abc' }
 * @description template(url, data) => /xxx/edit/1234/abc/content
 */
export const routeTemplate = (pathName: string, data: Record<string, string | number>): string => {
    const text = pathName.replace(/:(\w+)/g, (value: string | number, key: string): string => {
        if (data[key] === undefined) {
            return ''
        }
        if (data[key] === '0' || data[key] === 0) {
            return `${data[key]}`
        }
        return (data[key] || value) as string
    })
    return text
}



interface pathProps {
    name: string
    value: string
}

export interface Router {
    module: string
    paths: pathProps[]
}

const url = (url: string, prefix: string = '') => {
    return `${prefix}${url}`
}

export const userPrefix = '/user_center' // 我的地盘
export const userProfilePrefix = '/user_profile' // 用户空间
export const articlePrefix = '/article' // 用户空间
export const articleListPrefix = '/article_list' // 用户空间
export const bbsBlockPrefix = '/block_Page' // 论坛文章板块

const addPrefix = <T>(router: Router[], prefix: string = ''): T => {
    const routerWithPrefix: Record<string, string> = {}
    router.forEach(moduleItem => {
        moduleItem.paths.forEach(item => {
            routerWithPrefix[item.name] = url(item.value, prefix)
        })
    })
    return routerWithPrefix as T
}

interface Routers extends UserCenterRouters, UserProfile, ArticleRouters, ArticleListRouters,BlockPageRouters {
    login: string
    home: string

}

const routers: Routers = {
    login: url('/login'),
    home: url('/home'),
    ...addPrefix<UserCenterRouters>(userCenter, userPrefix),
    ...addPrefix<UserProfile>(userProfile, userProfilePrefix),
    ...addPrefix<ArticleRouters>(article, articlePrefix),
    ...addPrefix<ArticleListRouters>(articleList, articleListPrefix),
    ...addPrefix<BlockPageRouters>(blockPage, bbsBlockPrefix),
}

export default routers