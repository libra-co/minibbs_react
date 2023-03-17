/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-27 20:47:43
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-17 19:55:15
 * @FilePath: /minibbs_react/src/utils/routers.ts
 * @Description: routers
 */

import userCenter, { UserCenterRouters } from "./routers/userCenter"

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

export const userPrefix = 'user_center'

const addPrefix = <T>(router: Router[], prefix: string = ''): T => {
    const routerWithPrefix: Record<string, string> = {}
    router.forEach(moduleItem => {
        moduleItem.paths.forEach(item => {
            routerWithPrefix[item.name] = url(item.value, prefix)
        })
    })
    return routerWithPrefix as T
}

interface Routers extends UserCenterRouters {
    login: string
    home: string

}

const routers: Routers = {
    login: url('/login'),
    home: url('/home'),
    ...addPrefix<UserCenterRouters>(userCenter, userPrefix),
}

export default routers