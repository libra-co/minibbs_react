/**
 * @api /article/homeArticle
 */
export interface ArticleHomeArticleParams {
  pageNum: number;
  pageSize: number;
}

/**
 * @api /article/homeArticle
 */
export interface ArticleHomeArticle {
  dataList: ArticleHomeArticleListItem[];
  pageNum: number;
  pageSize: number;
  total: number;
}

export interface ArticleHomeArticleListItem {
aid: string;
title: string;
  userName: string;
}