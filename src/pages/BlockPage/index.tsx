/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-24 16:02:36
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-25 16:00:11
 * @FilePath: /minibbs_react/src/pages/BlockPage/index.tsx
 * @Description: 文章板块页面
 */
import { Card, Form, Input, Space } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { zoneList } from '@/utils/service/blockPage'
import { ZoneListResult } from './const'
import { history } from 'umi'
import { SearchArticleForm } from '../Home/const'
import routers, { routeTemplate } from '@/utils/routers'
import FooterRouteBtn from '@/components/FooterRouteBtn'
import './index.less'

const BlockPage = () => {
    const [blockDataList, setBlockDataList] = useState<ZoneListResult[]>([])
    const [form] = Form.useForm<SearchArticleForm>()

    useEffect(() => {
        handleGetZoneList()
    }, [])

    const handleGetZoneList = async () => {
        try {
            const { result, status } = await zoneList()
            if (status === 200) {
                setBlockDataList(result)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleSearchArticleFinish = (value: SearchArticleForm) => {
        history.push(routeTemplate(routers.searchArticle, { ...value }))
    }

    return (
        <div className='block-page'>
            <p className='page-header'>妖水网</p>
            <Form layout='horizontal' form={form} onFinish={handleSearchArticleFinish}>
                <Form.Item
                    label='搜索帖子'
                    name='keyword'
                    extra={
                        <div>
                            <a onClick={form.submit} >搜索</a>
                        </div>
                    }
                >
                    <Input placeholder='请输入文章标题' clearable />
                </Form.Item>
            </Form>
            {
                blockDataList.map(zoneItem => {
                    return (<div key={zoneItem.zid}>
                        <p className='mb-1 block-header'>{zoneItem.zoneName}</p>
                        <div className='w-full flex flex-wrap justify-around'>
                            {
                                zoneItem.blockList.map(blockItem => (
                                    <Card
                                        className='block-card m-2 border border-solid'
                                        key={blockItem.blid}
                                        onClick={() => history.push(routeTemplate(routers.blockArticle, { blid: blockItem.blid }))}
                                    >
                                        <Space direction='vertical' >
                                            <p>{blockItem.blockName}</p>
                                            <p>昨日： / 今：</p>
                                        </Space>
                                    </Card>
                                ))
                            }
                        </div >
                    </div>)
                })
            }
            <FooterRouteBtn />
        </div>
    )
}

export default BlockPage