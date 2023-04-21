/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 11:45:35
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 15:10:26
 * @FilePath: /minibbs_react/src/pages/Article/index.tsx
 * @Description: ariticle
 */
import { connect, history, useParams } from 'umi'
import { Button, Divider, Form, List, Space, Switch, TextArea, Toast } from 'antd-mobile'
import React, { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { ArticleDetailResult, ArticleForms, CommentAddParams, ReplyCommentInfo } from './const'
import { articleDetail, articledisLike, articleLike, commentAdd } from '@/utils/service/article'
import { required } from '@/utils/forms'
import CommentList from './components/CommentList'
import FooterRouteBtn from '@/components/FooterRouteBtn'
import { ComponentProps, ModelDvaState } from '@/interface'
import MoreArticleList from '@/components/MoreArticleList'
import routers, { routeTemplate } from '@/utils/routers'
import { IsNewestEnum } from '@/components/MoreArticleList/const'
import './index.less'

type Props = PageStateProps & ComponentProps & {}

const Article: FC<Props> = ({ user }) => {
    const routerParams = useParams<{ aid: string }>()
    const [articleDetailInfo, setArticleDetailInfo] = useState<ArticleDetailResult>()
    // 记录回复楼中楼的信息
    const [replyCommentInfo, setReplyCommentInfo] = useState<ReplyCommentInfo>({} as ReplyCommentInfo)
    const [form] = Form.useForm<{}>()
    const commentListRef = useRef<{ refreshCommentList: () => void }>()
    const [isNewestCommentArtilce, setIsNewestCommentArtilce] = useState<IsNewestEnum>(IsNewestEnum.RecentActived)

    useEffect(() => {
        getArticleDetail()
        window.scrollTo(0, 0)
    }, [routerParams.aid])

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
            if (status === 200) {
                Toast.show(message)
                getArticleDetail()
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    // 点踩
    const handleDislikeArticle = async () => {
        try {
            const { message, status } = await articledisLike({ aid: routerParams.aid! })
            if (status === 200) {
                Toast.show(message)
                getArticleDetail()
            }
        } catch (error) {
            console.log('error', error)
        }
    }


    const handleSubmitComment = async (value: ArticleForms) => {
        const query: CommentAddParams = {
            ...value,
            ...replyCommentInfo,
            aid: routerParams.aid!,
            isNoteCommentAuth: 0 as 0,
        }
        try {
            const { status, message } = await commentAdd(query)
            if (status === 200) {
                Toast.show({
                    content: message,
                })
                commentListRef.current?.refreshCommentList()
                form.resetFields()
            } else {
                Toast.show({
                    content: message,
                    duration: 500,
                    afterClose: commentListRef.current?.refreshCommentList
                })
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (

        <div className='article-page'>
            <p className='page-header' >
                帖子
            </p>
            <Space direction='vertical' className='title-block padding-0-8'>
                <div>[标题] {articleDetailInfo?.title}</div>
                <div>[时间] {articleDetailInfo?.createTime}</div>
            </Space>

            <Divider />
            <div className='padding-0-8 article-content'>
                {
                    articleDetailInfo?.content
                }
            </div>
            <Divider />
            <Space direction='vertical' className='user-info padding-0-8' >
                <div>[楼主] <a onClick={() => history.push(routeTemplate(routers.user_profile, { uid: articleDetailInfo?.uid! }))}>{articleDetailInfo?.username}</a></div>
                <div>[荣誉] {articleDetailInfo?.badge}</div>
                <div>[地区] {articleDetailInfo?.city} <a >交友 <span style={{ color: 'red' }}>暂时没做</span></a></div>
                <div><span>[操作] </span> <Space><a>管理</a><a>举报</a><a>收藏</a><a>打赏</a></Space></div>
                <div>[签名] {articleDetailInfo?.signatrue}</div>
                <Space>
                    <a onClick={handleLikeArticle}>顶({articleDetailInfo?.likeNum})</a>
                    <a onClick={handleDislikeArticle}>踩({articleDetailInfo?.dislikeNum})</a>
                </Space>
            </Space>
            <Form form={form} onFinish={handleSubmitComment} footer={[<Button onClick={form.submit}>快速回复</Button>]}>
                <Form.Item
                    name='isNoteAriticleAuth'
                    label='通知楼主?'
                    layout='horizontal'
                    initialValue={1}
                >
                    <Switch defaultChecked />
                </Form.Item>
                <Form.Item name='content' rules={required('请填写回复内容!')}>
                    <TextArea placeholder='请不要乱回复,以免被加黑' />
                </Form.Item>
            </Form>
            <CommentList aid={routerParams.aid!} ref={commentListRef} loginUid={user.uid} handleClickReplyComent={setReplyCommentInfo} />
            <p className='block-header' >
                <Space>
                    [<a onClick={() => history.push(routeTemplate(routers.blockChosen, {}))}>发表主题</a>]
                    <a onClick={() => setIsNewestCommentArtilce(IsNewestEnum.Newest)}>最新</a>
                    <span>-</span>
                    <a>搜索</a>
                </Space>
            </p>
            <MoreArticleList isNewest={isNewestCommentArtilce} />
            <FooterRouteBtn />
        </div>
    )
}

const mapStateToProps = (modelState: ModelDvaState) => {
    const { common } = modelState
    return {
        user: common.user
    }
}

type PageStateProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Article)