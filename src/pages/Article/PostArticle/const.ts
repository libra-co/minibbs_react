/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 17:57:13
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-27 18:05:50
 * @FilePath: /minibbs_react/src/pages/Article/PostArticle/const.ts
 * @Description: postArticle const
 */

/**
 * @api /article/post
 * @param bid 分区 bid
 */
export interface ArticlePostParams {
    bid: string;
    content: string;
    title: string;
}

export interface ArticlePostForm {
    content: string;
    title: string;
}