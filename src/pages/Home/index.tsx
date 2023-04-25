/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:58:20
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-25 15:48:00
 * @FilePath: \MINIBBS_REACT\src\pages\Home\index.tsx
 * @Description: home页
 */
import { ArticleHomeArticleListItem } from '@/components/MoreArticleList/const'
import { ComponentProps, ModelDvaState } from '@/interface'
import routers, { routeTemplate } from '@/utils/routers'
import { articleHomeArticle } from '@/utils/service/article'
import { Button, Form, Image, Input, NoticeBar, Space } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { connect, history } from 'umi'
import { SearchArticleForm, adList, quickActionList } from './const'
import './index.less'

type Props = PageStateToProps & ComponentProps & {}

const Home = (props: Props) => {
    const { user } = props
    const [articleList, setarticleList] = useState<ArticleHomeArticleListItem[]>([])
    const demoSrc = 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
    const [form] = Form.useForm<SearchArticleForm>()
    useEffect(() => {
        getArticleList()
    }, [])

    const getArticleList = async (isNewest: 0 | 1 = 0) => {
        const query = {
            pageNum: 1,
            pageSize: 10,
            isNewest,
        }
        try {
            const { status, result: { dataList } } = await articleHomeArticle(query)
            if (status === 200) {
                setarticleList(dataList)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleSearchArticleFinish = (value: SearchArticleForm) => {
        console.log('value in home', routeTemplate(routers.searchArticle, { ...value }))
        history.push(routeTemplate(routers.searchArticle, { ...value }))
    }

    return (
        <div className='home-page'>
            <NoticeBar content='妖水网正在内测中，部分功能未开发完毕，尽请期待...' color='alert' closeable />
            <p className="title-bar page-header">
                <Button onClick={() => history.push(routers.user_center)} size='small' color='primary' fill='none'>我的地盘</Button>
                <Button onClick={() => history.push(routeTemplate(routers.user_profile, { uid: user.uid }))} size='small' color='primary' fill='none'>空间</Button>
                <Button onClick={() => history.push(routeTemplate(routers.userArticleList, { uid: user.uid }))} size='small' color='primary' fill='none'>帖子</Button>
                <Button onClick={() => history.push(routeTemplate(routers.user_mail, {}))} size='small' color='primary' fill='none'>信箱</Button>
            </p>
            <Image className='logo' src={demoSrc} />
            <div className='quick-action-box'>
                <Space wrap>
                    {quickActionList.map(item => <Button onClick={() => history.push(item.route)} size='small' color='white' fill='none'>{item.name}</Button>)}
                </Space>
            </div>
            <div className="ad-bar-bpx">
                <Space direction='vertical'>
                    {adList.map(item => <Button onClick={() => window.open(item.link)} color='primary' fill='none'>{item.content}</Button>)}
                </Space>
            </div>
            <div className="bbs-title-bar block-header">
                <b>[</b><Button onClick={() => history.push(routeTemplate(routers.blockPage, {}))} color='primary' fill='none' >妖水论坛</Button> <b>]</b> <Button onClick={() => getArticleList(1)} color='primary' fill='none' >新帖</Button> - <Button onClick={() => history.push(routeTemplate(routers.blockChosen, {}))} color='primary' fill='none' >发帖</Button>
            </div>
            <div className="article-box">
                <Space className='article-box-list' direction='vertical'>
                    {articleList.map((item, index) => <Button key={item.aid} onClick={() => history.push(routeTemplate(routers.article, { aid: item.aid }))} color='primary' fill='none'>{`${index + 1}. ${item.title}`}</Button>)}
                </Space>
            </div>
            <Form layout='horizontal' form={form} onFinish={handleSearchArticleFinish}>
                <Form.Item
                    label='搜索帖子'
                    name='keyword'
                    extra={
                        <div className='search-article-ipt'>
                            <a onClick={form.submit} >搜索</a>
                        </div>
                    }
                >
                    <Input placeholder='请输入文章标题' clearable />
                </Form.Item>
            </Form>
        </div >
    )
}

const mapStateToProps = (modelState: ModelDvaState) => {
    const { common } = modelState
    return {
        user: common.user
    }
}

type PageStateToProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(Home)
