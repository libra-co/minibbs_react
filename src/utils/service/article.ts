import { ArticleDetailParams, ArticleDetailResult } from "@/pages/Article/const";
import request, { IResponse } from "../request";

/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-24 15:22:04
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-24 17:01:39
 * @FilePath: /minibbs_react/src/utils/service/article.ts
 * @Description: article service
 */

export function articleDetail(params: ArticleDetailParams): Promise<IResponse<ArticleDetailResult>> {
    return request('/article/detail', {
        method: 'POST',
        params: { ...params }
    })
}

export function articleLike(params: { aid: string }): Promise<IResponse> {
    return request('/article/like', {
        method: 'POST',
        params: { ...params }
    })
}
export function articledisLike(params: { aid: string }): Promise<IResponse> {
    return request('/article/dislike', {
        method: 'POST',
        params: { ...params }
    })
}