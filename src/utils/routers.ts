/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-27 20:47:43
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-28 16:48:15
 * @FilePath: /minibbs_react/src/utils/routers.ts
 * @Description: routers
 */

interface pathProps {
    name: string
    value: string
}

export interface Router {
    module: string
    paths: pathProps[]
}

const url = (url: string, prefix: string = '') => {
    return `${url}${prefix}`
}

const addPrefix = (router: Router, prefix: string = '') => {
    const routerWithPrefix: Record<string, string> = {}
    router.paths.forEach(item => {
        routerWithPrefix[item.name] = url(item.value, prefix)
    })
    return routerWithPrefix
}

const routers = {
    login: url('/login'),
}

export default routers