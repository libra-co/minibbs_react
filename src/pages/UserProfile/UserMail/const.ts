/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-31 14:58:34
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-31 17:49:36
 * @FilePath: /minibbs_react/src/pages/UserProfile/UserMail/const.ts
 * @Description: 用户信箱
 */

import { PaginationInterface } from "@/utils/commonInterface";


/**
 * @api /mail/list
 */
export interface MailListParams extends PaginationInterface {
    keywords?: string
}

/**
 * @api /mail/list
 */
export interface MailListResult {
    pageNum: number;
    pageSize: number;
    total: number;
    dataList: MailListResultItem[];
}

export interface MailListResultItem {
    mid: string;
    postUid: number;
    reciveUid: number;
    title: string;
    createTime: string;
    content: string;
    aid: string;
    postUsername: string;
    isRead: 0 | 1
}

export interface UserMailForm {
    keywords: string
}