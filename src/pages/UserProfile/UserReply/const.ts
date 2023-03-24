/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-22 15:51:39
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-23 14:18:55
 * @FilePath: /minibbs_react/src/pages/UserProfile/UserReply/const.ts
 * @Description: userReply const
 */

/**
 * @param uid 如果不传则默认查询登录用户的 uid
 */
export interface UserCommentListParams {
    uid?: number
    pageNum: number,
    pageSize: number,
}

export interface UserCommentListResult {
    dataList: UserComentItem[];
    pageNum: number;
    pageSize: number;
    total: number;
}

export interface UserComentItem {
    cid: string;
    aid: string;
    uid: number;
    commentTime: string;
    content: string;
    userName: string;
}