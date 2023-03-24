export default [
    {
        module: '/article',
        paths: [{ name: 'article', value: '/:aid' }]
    }
]

export interface ArticleRouters {
    article: string
}