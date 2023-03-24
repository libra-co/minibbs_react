import { history, useParams } from 'umi'
import { Divider, Space, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { ArticleDetailResult } from './const'
import { articleDetail, articledisLike, articleLike } from '@/utils/service/article'

const Article = () => {
    const routerParams = useParams<{ aid: string }>()
    const [articleDetailInfo, setArticleDetailInfo] = useState<ArticleDetailResult>()

    useEffect(() => {
        getArticleDetail()
    }, [])

    const getArticleDetail = async () => {
        const failCondition = () => Toast.show({
            content: '帖子跑丢啦~',
            duration: 500,
            afterClose: history.back
        })
        if (!routerParams.aid) {
            failCondition()
        }
        try {
            const { result, status } = await articleDetail({ aid: routerParams.aid! })
            if (status === 200) {
                setArticleDetailInfo(result)
            } else {
                failCondition()
            }
        } catch (error) {
            console.log('error', error)
            failCondition()
        }
    }

    const handleLikeArticle = async () => {
        try {
            const { message, status } = await articleLike({ aid: routerParams.aid! })
            Toast.show(message)
            getArticleDetail()
        } catch (error) {
            console.log('error', error)
        }
    }
    const handleDislikeArticle = async () => {
        try {
            const { message, status } = await articledisLike({ aid: routerParams.aid! })
            Toast.show(message)
            getArticleDetail()
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div>
            <Space direction='vertical'>
                <p>[标题] {articleDetailInfo?.title}</p>
                <p>[时间] {articleDetailInfo?.createTime}</p>
            </Space>

            <Divider />
            {
                articleDetailInfo?.content
            }
            <Divider />
            <Space direction='vertical'>
                <p>[楼主] {articleDetailInfo?.username}</p>
                <p>[荣誉] {articleDetailInfo?.badge}</p>
                <p>[地区] {articleDetailInfo?.city}</p>
                <p>[操作] </p>
                <p>[签名] {articleDetailInfo?.signatrue}</p>
                <Space>
                    <a onClick={handleLikeArticle}>顶({articleDetailInfo?.likeNum})</a>
                    <a onClick={handleDislikeArticle}>踩({articleDetailInfo?.dislikeNum})</a>
                </Space>
            </Space>


        </div>
    )
}

export default Article