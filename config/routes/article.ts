import routers from "../../src/utils/routers";

export default [
    {
        path: routers.article,
        name: 'Article',
        component: '@/pages/Article'
    },
    {
        path: routers.blockChosen,
        name: 'BlockChosen',
        component: '@/pages/Article/BlockChosen'
    },
    {
        path: routers.postArticle,
        name: 'PostArticle',
        component: '@/pages/Article/PostArticle'
    },
]