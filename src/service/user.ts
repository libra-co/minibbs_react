/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-23 11:55:04
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 13:44:25
 * @FilePath: /minibbs_react/src/service/user.ts
 * @Description: user api
 */

import { LoginParams } from '@/pages/Login/const';
import { CommonResponse } from '@/utils/interface';
import request from '@/utils/request';

export function login(params: LoginParams): CommonResponse {
  return request('user/login', {
    method: 'POST',
    params: { ...params },
  });
}
