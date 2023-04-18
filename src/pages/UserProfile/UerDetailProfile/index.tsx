/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 10:38:21
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-20 14:03:47
 * @FilePath: /minibbs_react/src/pages/UserProfile/UerDetailProfile/index.tsx
 * @Description: 详情资料
 */

import { history, useParams } from 'umi'
import { genderObj } from '@/pages/Login/const'
import { IdentityEnum, RoleEnum } from '@/pages/UserCenter/const'
import { userDetailProfile } from '@/utils/service/user'
import { Image, Space, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { ConstellationToCn, UserDetailProfileInterface } from './const'
import './index.less'
import FooterRouteBtn from '@/components/FooterRouteBtn'

const UserDetailProfile = () => {
    const [userProfileInfo, setUserProfileInfo] = useState<UserDetailProfileInterface>({} as UserDetailProfileInterface)
    const routerPrams = useParams<{ uid: string }>()

    useEffect(() => {
        getUserProfile()
    }, [])

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
            const { result, status } = await userDetailProfile({ uid: +routerPrams.uid! })
            if (status === 200) {
                setUserProfileInfo(result)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div>
            <p className='margin-top-0 block-header'>个人资料</p>
            <Image lazy src='/404' />
            <Space direction='vertical' style={{ '--gap-vertical': '1px' }}>
                <p className='pd0-10'>ID号: {userProfileInfo.uid}</p>
                <p className='pd0-10'>昵称: {userProfileInfo.username}</p>
                <p className='pd0-10'>妖晶: {userProfileInfo.coin}</p>
                <p className='pd0-10'>经验: {userProfileInfo.experience}</p>
                <p className='pd0-10'>等级: {userProfileInfo.level}</p>
                <p className='pd0-10'>头衔: <span style={{ color: 'red' }}>暂时没做</span></p>
                <p className='pd0-10'>身份: {IdentityEnum[userProfileInfo.identity]}</p>
                <p className='pd0-10'>权限:{RoleEnum[userProfileInfo.role]}</p>
                <p className='pd0-10'>勋章: {userProfileInfo.badge}</p>
                <p className='pd0-10'>性别: {genderObj[userProfileInfo.gender]}</p>
                <p className='pd0-10'>年龄: {userProfileInfo.age}</p>
                <p className='pd0-10'>状态: <span style={{ color: 'red' }}>此处应为是否在线</span></p>
                <p className='pd0-10'>积时: <span style={{ color: 'red' }}>此处应为在线时间{userProfileInfo.createTime}</span></p>
                <p className='pd0-10'>注册时间: {userProfileInfo.createTime}</p>
                <p className='pd0-10'>身高: {userProfileInfo.height}</p>
                <p className='pd0-10'>体重: {userProfileInfo.weight}</p>
                <p className='pd0-10'>星座: {ConstellationToCn[userProfileInfo.constellation]}</p>
                <p className='pd0-10'>爱好: {userProfileInfo.habbit}</p>
                <p className='pd0-10'>婚否: {userProfileInfo.isMarry ? '已婚' : '未婚'}</p>
                <p className='pd0-10'>职业: {userProfileInfo.vocation}</p>
                <p className='pd0-10'>城市: {userProfileInfo.city}</p>
            </Space>
            <FooterRouteBtn />
        </div>
    )
}

export default UserDetailProfile