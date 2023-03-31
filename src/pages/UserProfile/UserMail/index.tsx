/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-31 14:58:11
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-31 18:01:05
 * @FilePath: /minibbs_react/src/pages/UserProfile/UserMail/index.tsx
 * @Description: 信箱
 */
import { history } from 'umi'
import FooterRouteBtn from '@/components/FooterRouteBtn'
import PaginationBtn from '@/components/PaginationBtn'
import routers, { routeTemplate } from '@/utils/routers'
import { mailDelete, mailList } from '@/utils/service/user'
import { Form, Input, List, Space, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { MailListParams, MailListResultItem, UserMailForm } from './const'
import './index.less'

const UserMail = () => {
    const [mailLists, setmailLists] = useState<MailListResultItem[]>([])
    const [currentNum, setCurrentNum] = useState<number>(1)
    const [totalNum, settotalNum] = useState<number>(0)
    const [searchKeyWords, setSearchKeyWords] = useState<string>('')
    const [form] = Form.useForm()

    useEffect(() => {
        getMailList()
    }, [])

    const getMailList = async ({ currentPage, keywords }: { currentPage?: number, keywords?: string } = {}) => {
        const query: MailListParams = {
            pageNum: currentPage || currentNum,
            pageSize: 10,
            keywords
        }
        try {
            const { status, result: { dataList, pageNum, pageSize, total } } = await mailList(query)
            if (status === 200) {
                setCurrentNum(pageNum)
                settotalNum(total)
                setmailLists(dataList)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleDeleteMail = async (mid: string) => {
        try {
            const { status, message } = await mailDelete({ mid })
            if (status === 200) {
                let currentNumPage = Math.ceil((totalNum - 1) / 10) === 0 ? 1 : Math.ceil((totalNum - 1) / 10)
                Toast.show(message)
                getMailList({ currentPage: currentNumPage, keywords: searchKeyWords })
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const onNextPage = () => {
        getMailList({ currentPage: currentNum + 1 })
    }

    const onLastPage = () => {
        getMailList({ currentPage: currentNum - 1 })
    }

    // 渲染信箱列表
    const renderMailListItem = () => {
        return mailLists.map(mail => {
            return <>
                <List.Item>
                    <p>
                        <Space>
                            <a onClick={() => history.push(routeTemplate(routers.article, { aid: mail.aid }))}>{mail.content}</a>
                            <span>{mail.postUsername}</span>
                        </Space>
                    </p>
                    <p>
                        <Space>
                            <span>{mail.createTime}</span>
                            <span>[ <a onClick={() => handleDeleteMail(mail.mid)}>删除</a> ]</span>
                        </Space>

                    </p>
                </List.Item>
            </>
        })
    }

    const handleFormFinish = (values: UserMailForm) => {
        setSearchKeyWords(values.keywords.trim())
        getMailList({ keywords: values.keywords.trim() })
    }

    return (
        <div className='user-mail-page'>
            <p className='page-header'>信箱</p>
            <Form onFinish={handleFormFinish} form={form} >
                <Form.Item
                    extra={
                        <div className='extraPart'>
                            <a onClick={form.submit}>搜索消息</a>
                        </div>
                    }
                    name='keywords'
                >
                    <Input placeholder='请输入消息内容' clearable />
                </Form.Item>
            </Form>
            <List>
                {renderMailListItem()}
            </List>
            <PaginationBtn
                onNextPage={onNextPage}
                onLastPage={onLastPage}
                isDisableLastPageBtn={currentNum >= Math.ceil(totalNum / 10)}
                isDisableNextPageBtn={currentNum <= 1}
                quickJump={
                    {
                        currentPage: currentNum,
                        totalPage: Math.ceil(totalNum / 10),
                        totalDataNum: totalNum,
                        handleClickJumpPage: (pageNum) => getMailList({ currentPage: pageNum, keywords: searchKeyWords }),
                    }
                }
            />
            <FooterRouteBtn />
        </div>
    )
}

export default UserMail