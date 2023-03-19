/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-17 14:17:44
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-17 17:37:45
 * @FilePath: /minibbs_react/src/interface/index.ts
 * @Description: Model 对应的接口
 */

import { CommonModelState } from "@/models/common";
import { Dispatch, IRoute } from "umi";

// umi 组件默认参数
export interface ComponentProps {
    children: React.ReactNode
    dispatch: Dispatch<{ type: string, payload: any }>
    history: History
    location: Location
    route: IRoute
    routes: IRoute[]
    staticContext: unknown
}


// dva 的 namespace
export enum ModelNameSpaceEnum {
    common = 'common',
}

// 所有 model 对应的数据类型
export interface ModelDvaState {
    [ModelNameSpaceEnum.common]: CommonModelState
}