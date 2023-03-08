/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-27 20:45:37
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-08 23:56:25
 * @FilePath: /minibbs_react/src/pages/Login/index.tsx
 * @Description: Login page
 */
import { Button, Form, Input, Toast } from 'antd-mobile'
import React, { useState } from 'react'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'

import { LoginParams } from './const'
import { login } from '@/utils/service/user'
import { history } from 'umi'
import routers from '@/utils/routers'
import './index.less'

const Login = () => {
    // 控制密码是否可见
    const [visible, setVisible] = useState(false)

    const handleClickLogin = async (values: LoginParams) => {
        console.log('values', values)
        try {
            const { status, message } = await login({ ...values, username: Number(values.username) })
            console.log('status', status)
            if (status === 200) {
                Toast.show({
                    content: message,
                    afterClose: () => history.push(routers.home)
                })
            } else {
                Toast.show(message)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div className='login-page' >
            <Form
                layout='horizontal'
                footer={
                    <div className='fn-btn-box'>
                        <Button className='fn-btn'>注册</Button>
                        <Button className='fn-btn login-btn' type='submit' color='primary'>登录</Button>
                    </div>
                }
                onFinish={handleClickLogin}
                className='login-form'
            >
                <Form.Item name='username' label='用户名'>
                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <div className='pswd-box'>
                    <Form.Item name='password' label='密码'>
                        <Input
                            className='pswd-ipt'
                            placeholder='请输入密码'
                            type={visible ? 'text' : 'password'}
                        />
                    </Form.Item>
                    <div className='eye'>
                        {!visible ? (
                            <EyeInvisibleOutline onClick={() => setVisible(true)} />
                        ) : (
                            <EyeOutline onClick={() => setVisible(false)} />
                        )}
                    </div>
                </div>
            </Form>


        </div  >
    )
}

export default Login