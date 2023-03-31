/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 16:12:24
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-31 15:09:06
 * @FilePath: /minibbs_react/src/pages/UserProfile/UserArticle/const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { PaginationInterface } from "@/utils/commonInterface";

/**
 * @api /article/userArticleList
 */
export interface UserArticleListResult extends PaginationInterface {
    dataList: userArticleItem[];
    total: number;
}

/**
 * @api /article/userArticleList
 */
export interface userArticleItem {
    aid: string;
    title: string;
    createTime: string;
    viewNum: number;
    userName: string;
    replyNum: number;
}

/**
 * @api /article/userArticleList
 */
export interface UserArticleListParams extends PaginationInterface {
    uid: number,
}