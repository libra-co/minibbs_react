/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-19 19:50:51
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-23 11:56:12
 * @FilePath: \MINIBBS_REACT\src\pages\UserProfile\index.tsx
 * @Description: 用户空间
 */
import FooterRouteBtn from '@/components/FooterRouteBtn'
import { ComponentProps, ModelDvaState } from '@/interface'
import routers, { routeTemplate } from '@/utils/routers'
import { userProfile } from '@/utils/service/user'
import { Button, Form, Image, Input, Space, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { history, useParams } from 'umi'
import { genderObj, UserProfileResult } from '../Login/const'
import { IdentityEnum, RoleEnum } from '../UserCenter/const'
import './index.less'

type Props = PageStateToProps & ComponentProps & {

}

const UserProfile = (props: Props) => {
    const { user } = props
    const [userProfileInfo, setUserProfileInfo] = useState<UserProfileResult>({} as UserProfileResult)
    // 验证查看的页面是否为登录的账户
    const [isLoginUser, setIsLoginUser] = useState<boolean>(false)
    const routerPrams = useParams<{ uid: string }>()
    const [privateMessageForm] = Form.useForm<{ privateMessage: string }>()
    const [messageForm] = Form.useForm<{ message: string }>()

    useEffect(() => {
        getUserProfile()
    }, [])

    useEffect(() => {
        user !== undefined && setIsLoginUser(user.uid === +routerPrams.uid!)
    }, [user])



    // 获取用户信息
    const getUserProfile = async () => {
        if (routerPrams.uid === undefined) {
            Toast.show({
                content: '用户信息获取失败',
                afterClose: () => history.back(),
                duration: 500
            })
        }
        try {
            const { result, status } = await userProfile({ uid: +routerPrams.uid! })
            if (status === 200) {
                setUserProfileInfo(result)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleSendPrivateMessage = (value: { privateMessage: string }) => {
        console.log('value', value)
    }

    return (
        <div className='user-profile-page'>
            <p className='user-profile-header'>{userProfileInfo.username}的空间</p>
            <Image lazy src='/404' />
            <Form className='message-row' layout='horizontal' form={privateMessageForm} onFinish={handleSendPrivateMessage}>
                <Form.Item
                    label=''
                    name='privateMessage'
                    extra={
                        <div className='message-row-extra'>
                            <a onClick={privateMessageForm.submit}>发送私信</a>
                        </div>
                    }
                >
                    <Input placeholder='请输入私信内容' clearable />
                </Form.Item>
            </Form>
            <Space className='friend-btn-box' justify='center' block >
                <Button fill='outline' className='friend-btn' color='success' >加为好友</Button>
                <Button fill='outline' className='friend-btn' color='warning' >加黑名单</Button>
            </Space>
            <Space direction='vertical' style={{ '--gap-vertical': '1px' }}>
                <p className='pd0-10'>ID号: {userProfileInfo.uid}</p>
                <p className='pd0-10'>昵称: {userProfileInfo.username}</p>
                <p className='pd0-10'>妖精: {userProfileInfo.coin}</p>
                <p className='pd0-10'>经验: {userProfileInfo.experience}</p>
                <p className='pd0-10'>等级: {userProfileInfo.level}</p>
                <p className='pd0-10'>头衔: <span style={{ color: 'red' }}>暂时没做</span></p>
                <p className='pd0-10'>勋章: {userProfileInfo.badge}</p>
                <p className='pd0-10'>
                    <a className='pd0-10 padding-left-0' >{IdentityEnum[userProfileInfo.identity]}</a>
                    /
                    <span className='pd0-10'>{genderObj[userProfileInfo.gender]}</span>
                    /
                    <span className='pd0-10'>{userProfileInfo.age}</span>
                </p>
                <p className='pd0-10'>管理权限:{RoleEnum[userProfileInfo.role]}</p>
                <p className='pd0-10'>在线: <span style={{ color: 'red' }}>此处应有图标</span><span className='pd0-10'>[<a >对话</a>]</span></p>
                <p className='pd0-10'>{isLoginUser ? '我的' : '他的'}: <a onClick={() => history.push(routeTemplate(routers.user_detail_profile, { uid: userProfileInfo.uid }))} >详情资料</a></p>
                <p className='pd0-10'>{isLoginUser ? '我的' : '他的'}: <a onClick={() => history.push(routeTemplate(routers.user_article, { uid: userProfileInfo.uid }))} >帖子({userProfileInfo.articleNum})</a> <a onClick={() => history.push(routeTemplate(routers.user_reply, { uid: userProfileInfo.uid }))} className='pd0-10'>回复({userProfileInfo.replyNum})</a></p>
                <p className='pd0-10'>空间人气<span style={{ color: 'red' }}>暂时没做</span>/今日<span style={{ color: 'red' }}>暂时没做</span></p>
            </Space>
            <p className='block-header user-active-record'><span>{isLoginUser ? '我的' : '他的'}动态</span><span>更多</span></p>
            <Space direction='vertical' style={{ '--gap-vertical': '1px' }}>
                <p className='pd0-10'><span style={{ color: 'red' }}>这里没做完</span>分钟前回复了帖子: <a >xxxxxxxx</a></p>
                <p className='pd0-10'><span style={{ color: 'red' }}>这里没做完</span>分钟前回复了帖子: <a >xxxxxxxx</a></p>
                <p className='pd0-10'><span style={{ color: 'red' }}>这里没做完</span>分钟前回复了帖子: <a >xxxxxxxx</a></p>
            </Space>
            <p className='block-header user-active-record'>{isLoginUser ? '我的' : '他的'}的留言板</p>
            <Form className='message-row' layout='horizontal' form={messageForm} onFinish={handleSendPrivateMessage}>
                <Form.Item
                    label=''
                    name='message'
                    initialValue='我来踩踩，记得回哦！'
                    extra={
                        <div className='message-row-extra'>
                            <a onClick={messageForm.submit}>留言</a>
                        </div>
                    }
                >
                    <Input maxLength={250} placeholder='请输入留言内容' clearable />
                </Form.Item>
            </Form>
            <div className="message-board">
                <div>我来踩踩，记得回哦</div>
                <div>05-01 09:03</div>
            </div>
            <FooterRouteBtn />
        </div>
    )
}

const mapStateToState = (modelState: ModelDvaState) => {
    const { common } = modelState
    return {
        user: common.user
    }
}

type PageStateToProps = ReturnType<typeof mapStateToState>

export default UserProfile