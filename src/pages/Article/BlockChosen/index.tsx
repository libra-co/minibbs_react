/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 17:22:30
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-27 18:28:12
 * @FilePath: /minibbs_react/src/pages/Article/BlockChosen/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { blockList } from '@/utils/service/article'
import { Button, Divider, Space } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { BlockListItem } from './const'
import './index.less'

const BlockChosen = () => {
    const [allBlockList, setAllBlockList] = useState<BlockListItem[]>([])
    useEffect(() => {
        getAllBlockList()
    }, [])

    const getAllBlockList = async () => {
        try {
            const { result, status } = await blockList()
            if (status === 200) {
                setAllBlockList(result)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const renderBlock = allBlockList.map((block, index) => {
        if ((index + 1) % 2 === 0) {

        }
        return (
            <div>
                <Button key={block.blid} color='primary' fill='none' >妖水茶馆</Button>
                <Divider className='block-divider-verticle' direction='vertical' />
                <Button key={block.blid} color='primary' fill='none' >悬赏问答</Button>
            </div>
        )
    })

    return (
        <div className='block-chosen-page'>
            <p className='page-header'>发表新帖</p>
            <p className='block-header'>请选择板块</p>
            <Space direction='vertical'>

                <div>
                    <Button color='primary' fill='none' >妖水茶馆</Button>
                    <Divider className='block-divider-verticle' direction='vertical' />
                    <Button color='primary' fill='none' >悬赏问答</Button>
                </div>
                <div>
                    <Button color='primary' fill='none' >资源共享</Button>
                    <Divider className='block-divider-verticle' direction='vertical' />
                    <Button color='primary' fill='none' >综合技术</Button>
                </div>
                <div>
                    <Button color='primary' fill='none' >有奖活动</Button>
                    <Divider className='block-divider-verticle' direction='vertical' />
                    <Button color='primary' fill='none' >免流分享</Button>
                </div>
                <div>
                    <Button color='primary' fill='none' >贴图晒图</Button>
                    <Divider className='block-divider-verticle' direction='vertical' />
                    <Button color='primary' fill='none' >组队互助</Button>
                </div>
            </Space>
            <Divider />
            <div>
                <Button color='primary' fill='none' >站务处理</Button>
                <Divider className='block-divider-verticle' direction='vertical' />
                <Button color='primary' fill='none' >投诉建议</Button>
            </div>
            <Divider />
        </div>
    )
}

export default BlockChosen