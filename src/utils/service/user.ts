/*
* @Author: liuhongbo liuhongbo@dip-ai.com
* @Date: 2023-03-02 15:53:54
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-20 16:36:04
* @FilePath: /minibbs_react/src/utils/service/user.ts
* @Description: user api
*/

import { LoginParams, LoginResult, UserProfileResult } from "@/pages/Login/const";
import { UserDetailProfileInterface } from "@/pages/UserProfile/UerDetailProfile/const";
import { UserArticleListParams, UserArticleListResult } from "@/pages/UserProfile/UserArticle/const";
import request, { IResponse } from "../request";

export function login(params: LoginParams): Promise<IResponse<LoginResult>> {
    return request('/login', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 查询用户基础信息
 * @param uid 不传时查询当前登录账户的信息 
 */
export function userProfile(params: { uid?: number }): Promise<IResponse<UserProfileResult>> {
    return request('/user/profile', {
        method: 'GET',
        params: { ...params }
    })
}

/**
 * @description 查询用户基础信息
 * @param uid 不传时查询当前登录账户的信息
 */
export function userDetailProfile(params: { uid?: number }): Promise<IResponse<UserDetailProfileInterface>> {
    return request('/user/detailProfile', {
        method: 'GET',
        params: { ...params }
    })
}

/**
 * @description 查询用户发表的文章
 */
export function userArticleList(params: UserArticleListParams): Promise<IResponse<UserArticleListResult>> {
    return request('/article/userArticleList', {
        method: 'POST',
        params: { ...params }
    })
}

