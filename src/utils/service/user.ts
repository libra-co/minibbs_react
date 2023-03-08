/*
* @Author: liuhongbo liuhongbo@dip-ai.com
* @Date: 2023-03-02 15:53:54
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-08 22:59:02
* @FilePath: /minibbs_react/src/utils/service/user.ts
* @Description: user api
*/

import { LoginParams } from "@/pages/Login/const";
import request, { IResponse } from "../request";

export function login(params: LoginParams): Promise<IResponse> {
    return request('/login', {
        method: 'POST',
        params: { ...params }
    }
    )
}