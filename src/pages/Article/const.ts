/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-24 16:08:25
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-26 16:19:47
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
    blid: string;
    activeTime: string;
    isAttachment: 0 | 1;
    username: string
    level: number
    signatrue: string
    badge: string[]
    city: string
}

/**
 * @api /comment/add
 */
export interface CommentAddParams extends Partial<ReplyCommentInfo> {
    aid: string;
    content: string;
    isNoteAriticleAuth: 0 | 1;
    isNoteCommentAuth: 0 | 1;
}

export interface ArticleForms {
    content: string;
    isNoteAriticleAuth: 0 | 1;
    isNoteCommentAuth: 0 | 1;

}


// 如果存在,则说明为回复为 楼中楼
export interface ReplyCommentInfo {
    rcid: string;
    ruid: number;
}
