/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 13:54:03
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-20 13:52:04
 * @FilePath: /minibbs_react/src/components/PaginationBtn/index.tsx
 * @Description: 返回上级返回首页的按钮
 */

import { required } from '@/utils/forms'
import { Space, Button, Form, Input } from 'antd-mobile'
import React from 'react'
import { JumpPageForm } from './const'
import './index.less'

interface Props {
    onNextPage: () => void
    onLastPage: () => void
    isDisableNextPageBtn: boolean
    isDisableLastPageBtn: boolean
    quickJump?: {
        currentPage: number,
        totalPage: number,
        totalDataNum: number
        handleClickJumpPage: (jumpPage: number) => void
    }
}

const PaginationBtn = (props: Props) => {
    const { onNextPage, onLastPage, isDisableNextPageBtn = false, isDisableLastPageBtn = false, quickJump } = props
    const [form] = Form.useForm<JumpPageForm>()

    // 点击跳转的回调
    const handleClickJump = (value: JumpPageForm) => {
        quickJump?.handleClickJumpPage(+value.jumpPage)
    }

    return (
        <div className='footer-btn-page'>
            <Space className='footer-btn-box' direction='horizontal' justify='center' block >
                <Button disabled={isDisableLastPageBtn} className='last-page-btn page-btn' block fill='outline' onClick={onLastPage} shape='default' color='primary'>
                    上一页
                </Button>
                <Button disabled={isDisableNextPageBtn} className='next-page-btn page-btn' block fill='outline' onClick={onNextPage} shape='default' color='primary'>
                    下一页
                </Button>
            </Space>
            {quickJump && quickJump.totalDataNum > 0 && <div>
                <Form
                    layout='horizontal'
                    style={{ '--prefix-width': 'auto' }}
                    onFinish={handleClickJump}
                    form={form}
                >
                    <Form.Item
                        initialValue={1}
                        required={false}
                        name='jumpPage'
                        label={<div className='page-num-reminder'>第 {quickJump.currentPage} / {quickJump.totalPage} 页，共{quickJump.totalDataNum}条</div>}
                        extra={
                            <div >
                                <a onClick={form.submit}>翻页</a>
                            </div>
                        }
                        rules={[
                            ...required('请输入页数'),
                            () => ({
                                validator(rule, value) {
                                    if (value && value > quickJump.totalPage) {
                                        return Promise.reject(`最大页数为${quickJump.totalPage}}`)
                                    }
                                    if (value && value < 1) {
                                        return Promise.reject('最小页数为1')
                                    }
                                    return Promise.resolve()
                                }
                            })
                        ]}
                    >
                        <Input type='number' clearable />
                    </Form.Item>
                </Form>
            </div>

            }
        </div>
    )
}

export default PaginationBtn