/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-23 11:55:49
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 15:53:06
 * @FilePath: /minibbs_react/src/pages/Login/index.tsx
 * @Description: Login
 */
import { Form, Input } from 'antd-mobile';
import React, { useState } from 'react';
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons';

const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="login-page">
      <Form layout="horizontal" className="login-form">
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入用户名" clearable />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          extra={
            <div className="eye">
              {!visible ? (
                <EyeInvisibleOutline onClick={() => setVisible(true)} />
              ) : (
                <EyeOutline onClick={() => setVisible(false)} />
              )}
            </div>
          }
        >
          <Input
            placeholder="请输入密码"
            clearable
            type={visible ? 'text' : 'password'}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
