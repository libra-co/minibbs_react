/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-21 15:42:51
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 16:22:35
 * @FilePath: /minibbs_react/config/routes/articleList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import routers from "../../src/utils/routers";

export default [
    {
        path: routers.articleList,
        name: 'Article List',
        component: '@/pages/ArticleList',
    },
    {
        path: routers.userArticleList,
        name: 'User Article List',
        component: '@/pages/ArticleList',
    },
    {
        path: routers.searchArticle,
        name: 'User Article List',
        component: '@/pages/ArticleList',
    },
]