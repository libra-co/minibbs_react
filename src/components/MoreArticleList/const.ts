/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 11:45:35
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 10:06:02
 * @FilePath: /minibbs_react/src/components/MoreArticleList/const.ts
 * @Description: 推荐帖子
 */

import { PaginationInterface } from "@/utils/commonInterface";

/**
 * @api /article/homeArticle
 * @param isNewest 为1则按发帖时间排序
 */
export interface ArticleHomeArticleParams extends PaginationInterface {
  isNewest?: IsNewestEnum
}

/**
 * @api /article/homeArticle
 */
export interface ArticleHomeArticle extends PaginationInterface {
  dataList: ArticleHomeArticleListItem[];
  total: number;
}

export interface ArticleHomeArticleListItem {
  aid: string;
  title: string;
  userName: string;
}

export enum IsNewestEnum  {
  RecentActived,
  Newest,
}