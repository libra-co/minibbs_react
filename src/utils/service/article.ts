/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-24 15:22:04
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-25 18:14:16
 * @FilePath: /minibbs_react/src/utils/service/article.ts
 * @Description: article service
 */

import { ArticleHomeArticle, ArticleHomeArticleParams } from "@/components/MoreArticleList/const";
import { CommentListParams, CommentListResult } from "@/pages/Article/components/CommentList/const";
import { ArticleDetailParams, ArticleDetailResult } from "@/pages/Article/const";
import request, { IResponse } from "../request";


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

export function commentList(params: CommentListParams): Promise<IResponse<CommentListResult>> {
    return request('/comment/list', {
        method: 'POST',
        params: { ...params }
    })
}

export function articleHomeArticle(params: ArticleHomeArticleParams): Promise<IResponse<ArticleHomeArticle>> {
    return request('/article/homeArticle', {
        method: 'POST',
        params: { ...params }
    })
}