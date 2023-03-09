/*
* @Author: liuhongbo liuhongbo@dip-ai.com
* @Date: 2023-03-02 15:53:54
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-09 21:58:24
* @FilePath: /minibbs_react/src/utils/service/user.ts
* @Description: user api
*/

import { LoginParams, LoginResult, UserProfileResult } from "@/pages/Login/const";
import request, { IResponse } from "../request";

export function login(params: LoginParams): Promise<IResponse<LoginResult>> {
    return request('/login', {
        method: 'POST',
        params: { ...params }
    })
}

export function userProfile(params: { uid: number }): Promise<IResponse<UserProfileResult>> {
    return request('/user/profile', {
        method: 'GET',
        params: { ...params }
    })
}