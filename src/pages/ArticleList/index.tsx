/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 15:44:12
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-21 16:25:47
 * @FilePath: /minibbs_react/src/pages/UserProfile/UserArticle/index.tsx
 * @Description: Usr Article
 */
import { history, useParams } from 'umi'
import { userArticleList } from '@/utils/service/user'
import React, { useEffect, useState } from 'react'
import { List } from 'antd-mobile'
import { UserArticleListParams, userArticleItem } from './const'
import FooterRouteBtn from '@/components/FooterRouteBtn'
import PaginationBtn from '@/components/PaginationBtn'
import routers, { routeTemplate } from '@/utils/routers'
import './index.less'

const UserArticle = () => {
    const [articleList, setArticleList] = useState<userArticleItem[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isShowPaginationBtn, setIsShowPaginationBtn] = useState<boolean>(false)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [totalDataNum, setTotalDataNum] = useState<number>(0)
    const routerParams = useParams<{ uid?: string, keyword?: string }>()

    useEffect(() => {
        getUserArticleList()
    }, [])

    const getUserArticleList = async (getPageNum?: number) => {
        const query: any = {
            ...routerParams,
            pageNum: getPageNum || currentPage,
            pageSize: 10,
        }
        routerParams.uid && (query.uid = +routerParams.uid)
        try {
            const { result: { dataList, total, pageNum }, status } = await userArticleList(query)
            if (status === 200) {
                setArticleList(dataList)
                setCurrentPage(pageNum)
                setTotalPage(Math.ceil(total / 10))
                setIsShowPaginationBtn(total / 10 > 1)
                setTotalDataNum(total)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    // 点击下一页
    const handleClickNextPage = () => {
        getUserArticleList(currentPage + 1)
    }

    // 点击上一页
    const handleClickLastPage = () => {
        getUserArticleList(currentPage - 1)
    }

    return (
        <div className='user-article-page'>
            <p className='page-header'>帖子列表</p>
            <List>
                {articleList.map((article, index) => (
                    <List.Item
                        key={article.aid}
                        description={<span>{article.userName} / {article.replyNum} 回 / {article.viewNum} 阅</span>}
                    >
                        {`${((currentPage - 1) * 10) + 1 + index}.`}<a onClick={() => history.push(routeTemplate(routers.article, { aid: article.aid }))}>{article.title}</a>
                    </List.Item>
                ))}
            </List>
            {isShowPaginationBtn && <PaginationBtn
                onNextPage={handleClickNextPage}
                onLastPage={handleClickLastPage}
                isDisableLastPageBtn={currentPage - 1 < 1}
                isDisableNextPageBtn={currentPage + 1 > totalPage}
                quickJump={{ currentPage, totalPage, totalDataNum, handleClickJumpPage: getUserArticleList }}
            />}
            <FooterRouteBtn />
        </div>
    )
}

export default UserArticle