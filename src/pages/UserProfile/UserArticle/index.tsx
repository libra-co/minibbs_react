import { useParams } from 'umi'
import { userArticleList } from '@/utils/service/user'
import React, { useEffect, useState } from 'react'
import { List } from 'antd-mobile'
import { userArticleItem } from './const'
import FooterRouteBtn from '@/components/FooterRouteBtn'
import './index.less'

const UserArticle = () => {
    const [articleList, setArticleList] = useState<userArticleItem[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isShowGetMore, setIsShowGetMore] = useState<boolean>(false)
    const routerParams = useParams<{ uid: string }>()
    useEffect(() => {
        getUserArticleList()
    }, [])

    const getUserArticleList = async () => {
        const query = {
            uid: +routerParams.uid!,
            pageNum: currentPage,
            pageSize: 10,
        }
        try {
            const { result: { dataList, total }, status } = await userArticleList(query)
            if (status === 200) {
                setArticleList(dataList)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <div className='user-article-page'>
            <List header={
                <div>帖子列表</div>
            }>
                {articleList.map((article, index) => (
                    <List.Item
                        key={article.aid}
                        description={<span>{article.userName} / {article.replyNum} 回 / {article.viewNum} 阅</span>}
                    >
                        {`${((currentPage - 1) * 10) + 1 + index}.${article.title}`}
                    </List.Item>
                ))}
            </List>
            <FooterRouteBtn />
        </div>
    )
}

export default UserArticle