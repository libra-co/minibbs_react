/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 17:22:30
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-28 10:05:32
 * @FilePath: /minibbs_react/src/pages/Article/BlockChosen/index.tsx
 * @Description: block chosen
 */
import FooterRouteBtn from '@/components/FooterRouteBtn'
import routers, { routeTemplate } from '@/utils/routers'
import { blockList } from '@/utils/service/article'
import { Button, Divider, Space } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { history } from 'umi'
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

    // 渲染板块列表
    const renderBlock = () => {
        const renderElement = []
        for (let index = 0; index < allBlockList.length; index += 2) {
            renderElement.push(
                <div>
                    <Button onClick={() => history.push(routeTemplate(routers.postArticle, { blid: allBlockList[index].blid }))} key={allBlockList[index].blid} color='primary' fill='none' >{allBlockList[index].blockName}</Button>
                    <Divider className='block-divider-verticle' direction='vertical' />
                    {allBlockList[index + 1] && <Button onClick={() => history.push(routeTemplate(routers.postArticle, { blid: allBlockList[index + 1].blid }))} key={allBlockList[index + 1].blid} color='primary' fill='none' >{allBlockList[index + 1].blockName}</Button>}
                </div>
            )

        }
        return renderElement
    }

    return (
        <div className='block-chosen-page'>
            <p className='page-header'>发表新帖</p>
            <p className='block-header'>请选择板块</p>
            <Space direction='vertical'>
                {renderBlock()}
            </Space>
            <Divider />
            <div>
                <Button color='primary' fill='none' >站务处理</Button>
                <Divider className='block-divider-verticle' direction='vertical' />
                <Button color='primary' fill='none' >投诉建议</Button>
            </div>
            <Divider />
            <FooterRouteBtn />
        </div>
    )
}

export default BlockChosen