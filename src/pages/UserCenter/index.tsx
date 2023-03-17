import { ComponentProps, ModelDvaState } from '@/interface'
import { Button, Space } from 'antd-mobile'
import React from 'react'
import { connect } from 'umi'
import './index.less'

type Props = PageStateToProps & ComponentProps & {

}

const UserCenter = (props: Props) => {
    const { user } = props
    return (
        <div className='user-center-page' >
            <p className='user-center-header'>欢迎您: {user?.username}</p>
            <Space direction='vertical' style={{ '--gap-vertical': '1px' }}>
                <p>
                    <Button type='button' size='small' color='primary' fill='none'>信箱</Button>(0/0)
                    <Button color='primary' fill='none'>好友</Button>({user?.friendsNum})
                </p>
                <p>我的ID:{user.uid}</p>
                <p>我的妖精:{user.coin}</p>
                <p>充值妖精/转账/明细</p>
                <p>银行账户: <span color='red'>银行模块未实现</span><Button color='primary' fill='none'>取款</Button></p>
                <p>我的经验:{user.experience}</p>
                <p>我的等级:{user.level}级</p>
                <p>我的头衔:<span color='red'>头衔模块可能未实现</span></p>
                <p>我的身份:{user.identity}</p>
                <p>有效期至:<Button color='primary' fill='none'>{user.expireTime || '无限期'}</Button></p>
                <p>管理权限:{user.role}</p>
                <p><Button color='primary' fill='none'>我的勋章</Button>:</p>
                <p><Button color='primary' fill='none'>申请勋章</Button>/<Button color='primary' fill='none'>购买勋章</Button></p>
            </Space>

        </div>
    )
}

const mapStateToProps = (modelState: ModelDvaState) => {
    const { common } = modelState
    return {
        user: common.user
    }
}

type PageStateToProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(UserCenter)