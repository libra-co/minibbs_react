/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-28 16:51:24
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-26 17:34:24
 * @FilePath: /minibbs_react/src/utils/request.ts
 * @Description: 封装 request
 */

import { Toast } from 'antd-mobile'
import { history } from 'umi'
import { extend, ResponseError } from 'umi-request'
import routers, { routeTemplate } from './routers'
import { getToken, TokenKey } from './token'


export interface IResponse<T = any> extends Response {
    message: string
    result: T
}

const requestConfig = {
    // errorHandler,
    prefix: '',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
}

const request = extend({ timeout: 8000, ...requestConfig })

//参数配置
request.interceptors.request.use((url, options) => {
    const token = getToken(TokenKey)
    const { noSign, requestType } = options
    const method = options.method?.toLowerCase()

    // 配置服务地址 - beroreUrl
    let beroreUrl: string = options.beroreUrl ?? '/api/web'
    // if (isProduct) beroreUrl = ''

    // 不需要默认参数 - noSign
    if (noSign) {
        return {
            url: beroreUrl + url,
            options: { ...options },
        }
    }
    // 默认参数
    const initQuery = {}
    let assignData = Object.assign(initQuery, options.data)
    let assignParams = Object.assign(initQuery, options.params)
    // 添加请求头
    const headers: any = { ...options.headers }
    if (token) {
        headers[TokenKey] = token
    }
    // 文件格式
    if (requestType === 'form') {
        // headers['Content-Type'] = 'multipart/form-data; boundary=----WebKitFormBoundary7TMYhSONfkAM2z3a'
        // headers['Accept'] = '*'
        delete headers['Content-Type']
        delete headers['Accept']
        assignData = options.data
    }
    if (method === 'get') {
        delete headers['Content-Type']
    }
    let optionsInit: any = {
        ...options,
        headers: { ...headers },
        data: assignData,
        params: assignParams,
    }
    if (method === 'post') {
        delete optionsInit.params
    } else if (method === 'get') {
        delete optionsInit.data
    }
    return {
        url: beroreUrl + url,
        options: { ...optionsInit },
    }
})

//拦截器
request.interceptors.response.use(async (response, options) => {
    const { noRedirect = false, responseType } = options

    try {
        // 克隆响应对象做解析处理
        // 这里的res就是我们请求到的数据
        const result = await response.clone().json()

        // 定期修改密码。
        // if (result && result.status === 104) {
        //     history.push(routers.changepassword)
        // }
        if (result.statusCode === 401) {
            Toast.show('登录过期,请重新登录!')
            history.push(routeTemplate(routers.login, {}))
        }

        // noRedirect为true时，不需要校验
        // if ((!noRedirect && result && result.status === 102) || (!noRedirect && result && result.status === 10000)) {
        //     message.error(result.message)
        //     // 重定向 - 清除 token
        //     removeCookie(TokenKey)
        //     window.location.href = getCookie(RedirectKey) || cloud_doman
        // }
        return result
    } catch (error) {
        // error 说明不是个json
        return response
        if (responseType === 'blob') {
            // 响应数据为 blob 类型时，不需要解析，直接返回数据流
        }
    }
})

export default request


