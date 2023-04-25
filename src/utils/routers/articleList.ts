/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-21 15:40:03
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-25 15:41:00
 * @FilePath: /minibbs_react/src/utils/routers/articleList.ts
 * @Description: article list routers
 */
export default [
    {
        module: '/articleList',
        paths: [
            { name: 'articleList', value: '/' },
            { name: 'userArticleList', value: '/user/:uid' },
            { name: 'searchArticle', value: '/search/:keyword' },
            { name: 'blockArticle', value: '/block/:blid' },
        ]
    }
]

export interface ArticleListRouters {
    articleList: string
    userArticleList: string
    searchArticle: string
    blockArticle: string
}