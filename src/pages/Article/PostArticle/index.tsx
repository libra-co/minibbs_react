/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 17:53:42
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-28 11:26:28
 * @FilePath: /minibbs_react/src/pages/Article/PostArticle/index.tsx
 * @Description: PostArticle
 */
import { history, useParams } from 'umi'
import { required } from '@/utils/forms'
import { articlePost, blockDetail } from '@/utils/service/article'
import { Button, Form, Input, TextArea, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { ArticlePostForm } from './const'
import routers, { routeTemplate } from '@/utils/routers'
import FooterRouteBtn from '@/components/FooterRouteBtn'

const PostArticle = () => {
    const routeParams = useParams<{ blid: string }>()
    const [blockName, setBlockName] = useState<string>('')
    const [form] = Form.useForm<ArticlePostForm>()
    useEffect(() => {
        getBlockDetail()
    }, [routeParams.blid])
    // 提交信息
    const handleClickSubmit = async (value: ArticlePostForm) => {
        const query = {
            ...value,
            bid: routeParams.blid!
        }
        const { result, message, status } = await articlePost(query)
        if (status === 200) {
            Toast.show({
                content: message,
                afterClose: () => history.push(routeTemplate(routers.article, { aid: result.aid }))
            })
        }
    }

    // 查询板块信息
    const getBlockDetail = async () => {
        try {
            const { result, status } = await blockDetail({ blid: routeParams.blid! })
            if (status === 200) {
                setBlockName(result.blockName)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div>
            <p className='page-header'>发表主题帖({blockName})</p>
            <Form
                form={form}
                onFinish={handleClickSubmit}
                footer={[<Button onClick={form.submit}>发表新帖子</Button>]}
            >
                <Form.Item name='title' label='标题' rules={required('请输入标题！')}>
                    <Input placeholder='请输入标题' />
                </Form.Item>
                <Form.Item name='content' label='内容' rules={required('请输入内容！')}>
                    <TextArea rows={15} placeholder='发推广（邀请类帖子）、宣传QQ微信群一律封号' />
                </Form.Item>
            </Form>
            <FooterRouteBtn />
        </div>
    )
}
export default PostArticle