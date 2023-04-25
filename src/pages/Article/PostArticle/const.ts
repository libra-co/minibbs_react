/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 17:57:13
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-25 16:10:27
 * @FilePath: /minibbs_react/src/pages/Article/PostArticle/const.ts
 * @Description: postArticle const
 */

/**
 * @api /article/post
 * @param blid 分区 blid
 */
export interface ArticlePostParams {
    blid: string;
    content: string;
    title: string;
}

/**
 * @api /article/post
 * @param blid 分区 blid
 */
export interface ArticlePostReturn {
    aid: string;
}

export interface ArticlePostForm {
    content: string;
    title: string;
}

/**
 * @api /block/detail
 */
export interface BlockDetailParams {
    blid: string
}

/**
 * @api /block/detail
 */
export interface BlockDetailResult {
    blid: string;
    blockName: string;
}