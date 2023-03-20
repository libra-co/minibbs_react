/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 13:54:03
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-20 14:18:15
 * @FilePath: /minibbs_react/src/components/FooterRouteBtn/index.tsx
 * @Description: 返回上级返回首页的按钮
 */

import routers from '@/utils/routers'
import { Space, Button } from 'antd-mobile'
import React from 'react'
import { history } from 'umi'
import './index.less'

const FooterRouteBtn = () => {
    return (
        <div className='footer-btn-page'>
            <Space className='footer-btn-box' direction='horizontal' justify='center' block >
                <Button className='route-btn' block fill='outline' onClick={() => history.back()} shape='default' color='primary'>
                    返回上级
                </Button>
                <Button className='route-btn' block fill='outline' onClick={() => history.push(routers.home)} shape='default' color='primary'>
                    返回首页
                </Button>
            </Space>
        </div>
    )
}

export default FooterRouteBtn