/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-19 19:50:51
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 22:18:37
 * @FilePath: \MINIBBS_REACT\src\pages\UserProfile\index.tsx
 * @Description: 用户空间
 */
import { ComponentProps, ModelDvaState } from '@/interface'
import { userProfile } from '@/utils/service/user'
import { Button, Form, Image, Input, Space, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { history, useParams } from 'umi'
import { GenderEnum, genderObj, UserProfileResult } from '../Login/const'
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
    const [form] = Form.useForm<{ message: string }>()

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

    const handleSendPrivateMessage = (value: { message: string }) => {
        console.log('value', value)
    }

    return (
        <div className='user-profile-page'>
            <p className='user-profile-header'>{userProfileInfo.username}的空间</p>
            <Image lazy src='/404' />
            <Form className='message-row' layout='horizontal' form={form} onFinish={handleSendPrivateMessage}>
                <Form.Item
                    label=''
                    name='message'
                    extra={
                        <div className='message-row-extra'>
                            <a onClick={form.submit}>发送私信</a>
                        </div>
                    }
                >
                    <Input placeholder='请输入私信内容' clearable />
                </Form.Item>
            </Form>
            <p>
                <Button >加为好友</Button>
                <Button >加黑名单</Button>
            </p>
            <Space direction='vertical' style={{ '--gap-vertical': '1px' }}>
                <p className='link-btn'>ID号: {userProfileInfo.uid}</p>
                <p className='link-btn'>昵称: {userProfileInfo.username}</p>
                <p className='link-btn'>妖精: {userProfileInfo.coin}</p>
                <p className='link-btn'>经验: {userProfileInfo.experience}</p>
                <p className='link-btn'>等级: {userProfileInfo.level}</p>
                <p className='link-btn'>头衔: <span style={{ color: 'red' }}>暂时没做</span></p>
                <p className='link-btn'>勋章: {userProfileInfo.badge}</p>
                <p className='link-btn'>
                    <a className='link-btn cancel-text-margin-right' >{IdentityEnum[userProfileInfo.identity]}</a>
                    /
                    <span className='link-btn'>{genderObj[userProfileInfo.gender]}</span>
                    /
                    <span className='link-btn'>{userProfileInfo.age}</span>
                </p>
                <p className='link-btn'>管理权限:{RoleEnum[userProfileInfo.role]}</p>
                <p className='link-btn'>在线: <span style={{ color: 'red' }}>此处应有图标</span><span className='link-btn'>[<a >对话</a>]</span></p>
                <p className='link-btn'>{isLoginUser ? '我的' : '他的'}: <a >详情资料</a></p>
                <p className='link-btn'>{isLoginUser ? '我的' : '他的'}: <a >帖子({userProfileInfo.articleNum})</a> <a className='link-btn'>回复({userProfileInfo.replyNum})</a></p>
                <p>空间人气<span style={{ color: 'red' }}>暂时没做</span>/今日<span style={{ color: 'red' }}>暂时没做</span></p>
            </Space>
            
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