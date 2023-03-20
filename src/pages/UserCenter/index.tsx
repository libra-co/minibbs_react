/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-09 22:26:45
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 20:44:14
 * @FilePath: \MINIBBS_REACT\src\pages\UserCenter\index.tsx
 * @Description: 个人中心
 */
import FooterRouteBtn from '@/components/FooterRouteBtn'
import { ComponentProps, ModelDvaState } from '@/interface'
import routers, { routeTemplate } from '@/utils/routers'
import { Space } from 'antd-mobile'
import { connect, history } from 'umi'
import { IdentityEnum, RoleEnum } from './const'
import './index.less'

type Props = PageStateToProps & ComponentProps & {

}

const UserCenter = (props: Props) => {
    const { user } = props
    return (
        <div className='user-center-page' >
            <p className='user-center-header'>欢迎您: {user?.username}</p>
            <Space className='block-body' direction='vertical' style={{ '--gap-vertical': '1px' }}>
                <div>
                    <a className='pd0-10 padding-left-0'>信箱</a>(0/0)
                    <a className='pd0-10'>好友</a>({user?.friendsNum})
                </div>
                <p>我的ID:{user.uid}</p>
                <p>我的妖精:{user.coin}</p>
                <p>
                    <a className='pd0-10 padding-left-0' >充值妖精</a>
                    /
                    <a className='pd0-10'>转账</a>
                    /
                    <a className='pd0-10'>明细</a>
                </p>
                <p>银行账户: <span style={{ color: 'red' }}>银行模块未实现</span><a className='pd0-10' >取款</a></p>
                <p>我的经验:{user.experience}</p>
                <p>我的等级:{user.level}级</p>
                <p>我的头衔:<span style={{ color: 'red' }}>头衔模块可能未实现</span></p>
                <p>我的身份:{IdentityEnum[user.identity]}</p>
                <p>有效期至:<a className='pd0-10' >{user.expireTime || '无限期'}</a></p>
                <p>管理权限:{RoleEnum[user.role]}</p>
                <p><a className='pd0-10 padding-left-0'>我的勋章</a>:{user.badge}</p>
                <p><a className='pd0-10 padding-left-0'>申请勋章</a>/<a className='pd0-10' >购买勋章</a></p>
            </Space>
            <p className='block-header'>我的设置</p>
            <Space className='block-body' direction='vertical' style={{ '--gap-vertical': '10px' }}>
                <Space>
                    <a onClick={() => history.push(routeTemplate(routers.user_profile, { uid: user.uid }))}>我的空间</a>
                    <a>修改资料</a>
                </Space>
                <Space>
                    <a>我的收藏</a>
                    <a>我的相册</a>
                </Space>
            </Space>
            <p className='block-header'>相关信息</p>
            <Space className='block-body' direction='vertical' style={{ '--gap-vertical': '10px' }}>
                <Space>
                    <a>我的帖子({user.articleNum})</a>
                    <a>回复({user.replyNum})</a>
                </Space>
                <Space>
                    <a>我的家族<span style={{ color: 'red' }}>(家族功能未实现)</span></a>
                    <a>我的相册<span style={{ color: 'red' }}>(相册功能未实现)</span></a>
                </Space>
            </Space>
            <p className='block-header'>网站规则</p>
            <Space className='block-body' direction='vertical' style={{ '--gap-vertical': '10px' }}>
                <div><a>妖晶获取消费规则</a></div>
                <div><a>经验头衔等级规则</a></div>
                <div><a>在线时间图标规则</a></div>
            </Space>
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

type PageStateToProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(UserCenter)