/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 17:53:42
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-27 18:08:39
 * @FilePath: /minibbs_react/src/pages/Article/PostArticle/index.tsx
 * @Description: PostArticle
 */
import { useParams } from 'umi'
import { required } from '@/utils/forms'
import { articlePost } from '@/utils/service/article'
import { Button, Form, Input, TextArea } from 'antd-mobile'
import React from 'react'
import { ArticlePostForm } from './const'

export const PostArticle = () => {
    const routeParams = useParams<{ bid: string }>()
    const [form] = Form.useForm<ArticlePostForm>()

    const handleClickSubmit = async (value: ArticlePostForm) => {
        console.log('value', value)
        const query = {
            ...value,
            bid: routeParams.bid!
        }
        const { result, message, status } = await articlePost(query)
        if (status === 200) {

        }
    }
    return (
        <div>
            <Form
                onFinish={handleClickSubmit}
                footer={[<Button onClick={form.submit}>发表新帖子</Button>]}
            >
                <Form.Item name='title' label='标题' rules={required('请输入标题！')}>
                    <Input placeholder='请输入标题' />
                </Form.Item>
                <Form.Item name='content' label='内容' rules={required('请输入内容！')}>
                    <TextArea placeholder='发推广（邀请类帖子）、宣传QQ微信群一律封号' />
                </Form.Item>
            </Form>
        </div>
    )
}
