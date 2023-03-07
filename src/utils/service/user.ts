/*
* @Author: liuhongbo liuhongbo@dip-ai.com
* @Date: 2023-03-02 15:53:54
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-02 16:11:40
* @FilePath: /minibbs_react/src/utils/service/user.ts
* @Description: user api
*/

import request, { IResponse } from "../request";

export function login(params: { username: string, password: string }): Promise<IResponse> {
    return request('user/login', {
        method: 'POST',
        params: { ...params }
    }
    )
}