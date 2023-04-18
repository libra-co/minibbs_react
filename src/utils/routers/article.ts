/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-24 17:09:50
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-28 10:04:43
 * @FilePath: /minibbs_react/src/utils/routers/article.ts
 * @Description: article routers
 */
export default [
    {
        module: '/article',
        paths: [
            { name: 'article', value: '/:aid' },
            { name: 'blockChosen', value: '/block_chosen' },
            { name: 'postArticle', value: '/post_article/:blid' },
        ]
    }
]

export interface ArticleRouters {
    article: string
    blockChosen: string
    postArticle: string
}