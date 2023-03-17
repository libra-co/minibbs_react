/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:58:20
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-17 19:58:32
 * @FilePath: \MINIBBS_REACT\src\pages\Home\index.tsx
 * @Description: home页
 */
import routers from '@/utils/routers'
import { Button, Image, Space } from 'antd-mobile'
import React from 'react'
import { history } from 'umi'
import { adList, quickActionList } from './const'
import './index.less'

const Home = () => {
    const demoSrc = 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'

    return (
        <div className='home-page'>
            <p className="title-bar">
                <Button onClick={() => history.push(routers.user_center)} size='small' color='primary' fill='none'>我的地盘</Button>
                <Button size='small' color='primary' fill='none'>空间</Button>
                <Button size='small' color='primary' fill='none'>帖子</Button>
                <Button size='small' color='primary' fill='none'>信箱</Button>
            </p>
            <Image className='logo' src={demoSrc} />
            <div className='quick-action-box'>
                <Space wrap>
                    {quickActionList.map(item => <Button onClick={() => history.push(item.route)} size='small' color='primary' fill='none'>{item.name}</Button>)}
                </Space>
            </div>
            <div className="ad-bar-bpx">
                <Space direction='vertical'>
                    {adList.map(item => <Button onClick={() => window.open(item.link)} color='primary' fill='none'>{item.content}</Button>)}
                </Space>
            </div>
            <div className="bbs-title-bar">
                <b>[</b><Button color='primary' fill='none' >妖火论坛</Button> <b>]</b> <Button color='primary' fill='none' >新帖</Button> - <Button color='primary' fill='none' >发帖</Button>
            </div>
            <div className="article-box">
                <Space className='article-box-list' direction='vertical'>
                    {mockArticle.map((item, index) => <Button color='primary' fill='none'>{`${index + 1}. ${item.title}`}</Button>)}
                </Space>
            </div>
        </div>
    )
}

export default Home

const mockArticle = [
    {
        "aid": "0b107ab7-d1f8-4ca7-95dd-c21a50b9878d",
        "title": "999999999999999",
        "userName": "system"
    },
    {
        "aid": "22e1c12b-04e7-4e71-93f2-dcef78fc2d71",
        "title": "几导音入见",
        "userName": "system"
    },
    {
        "aid": "09ee4d2a-7811-491b-ae71-33e2da63a45e",
        "title": "同究阶形例",
        "userName": "system"
    },
    {
        "aid": "16cad0dc-7986-46a0-8cda-12f03f8c7420",
        "title": "处热被外",
        "userName": "system"
    },
    {
        "aid": "234c5453-ee14-49b2-9735-c61e2a5c9d69",
        "title": "Top3",
        "userName": "system"
    },
    {
        "aid": "47665407-b83a-42a3-a1c6-676a6bca8415",
        "title": "近特过步看二",
        "userName": "system"
    },
    {
        "aid": "52770d07-8045-4906-9e58-7200732bed5c",
        "title": "力叫身安动回",
        "userName": "system"
    },
    {
        "aid": "617e0650-561d-4dc1-89c4-a67029481ecd",
        "title": "元写第矿",
        "userName": "system"
    },
    {
        "aid": "68dda538-4a28-4d63-82c0-d17ca6aeeea2",
        "title": "起县听样达",
        "userName": "system"
    },
    {
        "aid": "6e1cbe55-e92b-4ae4-9e73-0d52dc225059",
        "title": "Top2",
        "userName": "system"
    }
]