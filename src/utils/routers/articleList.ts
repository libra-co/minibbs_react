/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-21 15:40:03
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 16:21:59
 * @FilePath: /minibbs_react/src/utils/routers/articleList.ts
 * @Description: article list routers
 */
export default [
    {
        module: '/articleList',
        paths: [
            { name: 'articleList', value: '/' },
            { name: 'userArticleList', value: '/:uid' },
            { name: 'searchArticle', value: '/:keywords' },
        ]
    }
]

export interface ArticleListRouters {
    articleList: string
    userArticleList: string
    searchArticle: string
}