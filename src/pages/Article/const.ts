/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-24 16:08:25
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-24 17:02:05
 * @FilePath: /minibbs_react/src/pages/Article/const.ts
 * @Description: article const
 */


/**
 * @api /article/detail
 */
export interface ArticleDetailParams {
    aid: string
}

/**
 * @api /article/detail
 */
export interface ArticleDetailResult {
    aid: string;
    uid: number
    title: string;
    content: string;
    createTime: string;
    updateTime: string;
    likeNum: number;
    dislikeNum: number;
    viewNum: number;
    bid: string;
    activeTime: string;
    isAttachment: 0 | 1;
    username: string
    level: number
    signatrue: string
    badge: string[]
    city: string
}
