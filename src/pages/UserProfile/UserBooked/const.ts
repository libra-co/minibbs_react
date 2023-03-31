/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-23 14:40:57
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-31 15:11:54
 * @FilePath: /minibbs_react/src/pages/UserProfile/UserBooked/const.ts
 * @Description: 用户收藏
 */

import { PaginationInterface } from "@/utils/commonInterface";

/**
 * @api /bookMark/list
 */
export interface BookMarkListParams extends PaginationInterface {
    uid: number
}

/**
 * @api /bookMark/list
 */
export interface BookMarkListResult extends PaginationInterface {
    dataList: BookMarkListItem[];
    total: number;
}

export interface BookMarkListItem {
    bmid: string;
    aid: string;
    bookMarkTime: string;
    title: string;
}