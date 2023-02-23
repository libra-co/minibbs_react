/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-23 14:22:48
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 14:23:55
 * @FilePath: /minibbs_react/src/utils/routers/const.ts
 * @Description: routers const
 */
export interface Routers {
  module: string;
  name: string;
  path: RoutersPath[];
}

export interface RoutersPath {
  name: string;
  value: string;
}
