import { history, useParams } from 'umi'
import { Button, Divider, Form, List, Space, Switch, TextArea, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { ArticleDetailResult } from './const'
import { articleDetail, articledisLike, articleLike } from '@/utils/service/article'
import { required } from '@/utils/forms'
import './index.less'
import CommentList from './components/CommentList'

const Article = () => {
    const routerParams = useParams<{ aid: string }>()
    const [articleDetailInfo, setArticleDetailInfo] = useState<ArticleDetailResult>()
    const [form] = Form.useForm<{}>()

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

    // 点击赞
    const handleLikeArticle = async () => {
        try {
            const { message, status } = await articleLike({ aid: routerParams.aid! })
            Toast.show(message)
            getArticleDetail()
        } catch (error) {
            console.log('error', error)
        }
    }

    // 点踩
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
        <div className='article-page'>
            <Space direction='vertical' className='title-block'>
                <div>[标题] {articleDetailInfo?.title}</div>
                <div>[时间] {articleDetailInfo?.createTime}</div>
            </Space>

            <Divider />
            {
                articleDetailInfo?.content
            }
            <Divider />
            <Space direction='vertical' className='user-info'>
                <div>[楼主] {articleDetailInfo?.username}</div>
                <div>[荣誉] {articleDetailInfo?.badge}</div>
                <div>[地区] {articleDetailInfo?.city} <a >交友 <span style={{ color: 'red' }}>暂时没做</span></a></div>
                <div><span>[操作] </span> <Space><a>管理</a><a>举报</a><a>收藏</a><a>打赏</a></Space></div>
                <div>[签名] {articleDetailInfo?.signatrue}</div>
                <Space>
                    <a onClick={handleLikeArticle}>顶({articleDetailInfo?.likeNum})</a>
                    <a onClick={handleDislikeArticle}>踩({articleDetailInfo?.dislikeNum})</a>
                </Space>
            </Space>
            <Form form={form} footer={[<Button onClick={form.submit}>快速回复</Button>]}>
                <Form.Item
                    name='delivery'
                    label='通知楼主?'
                    layout='horizontal'
                >
                    <Switch />
                </Form.Item>
                <Form.Item name='replyText' rules={required('请填写回复内容!')}>
                    <TextArea placeholder='请不要乱回复,以免被加黑' />
                </Form.Item>
            </Form>
            <CommentList aid={routerParams.aid!} />
        </div>
    )
}

export default Article