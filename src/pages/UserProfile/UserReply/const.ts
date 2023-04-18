/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-22 15:51:39
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-31 15:12:21
 * @FilePath: /minibbs_react/src/pages/UserProfile/UserReply/const.ts
 * @Description: userReply const
 */

import { PaginationInterface } from "@/utils/commonInterface";

/**
 * @param uid 如果不传则默认查询登录用户的 uid
 */
export interface UserCommentListParams extends PaginationInterface {
    uid?: number
}

export interface UserCommentListResult extends PaginationInterface {
    dataList: UserComentItem[];
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