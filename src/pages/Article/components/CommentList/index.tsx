/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-25 17:21:10
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-25 18:36:28
 * @FilePath: \MINIBBS_REACT\src\pages\Article\components\CommentList\index.tsx
 * @Description: 评论列表
 */

import FooterRouteBtn from '@/components/FooterRouteBtn'
import MoreArticleList from '@/components/MoreArticleList'
import PaginationBtn from '@/components/PaginationBtn'
import routers, { routeTemplate } from '@/utils/routers'
import { commentList } from '@/utils/service/article'
import { List, Space } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { history } from 'umi'
import { CommentListItem } from './const'
import './index.less'

interface Props {
  aid: string
}

const CommentList = ({ aid }: Props) => {
  const [comentLists, setComentLists] = useState<CommentListItem[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalNum, setTotalNum] = useState<number>(0)

  useEffect(() => {
    getCommentList()
  }, [])

  // 获取评论列表
  const getCommentList = async (currentPageNum?: number) => {
    const query = {
      aid,
      pageNum: currentPageNum || currentPage,
      pageSize: 10,
    }
    const { status, result: { dataList, pageNum, pageSize, total } } = await commentList(query)
    if (status === 200) {
      setComentLists(dataList)
      setCurrentPage(pageNum)
      setTotalNum(total)
    }
  }

  const onNextPage = () => {
    getCommentList(currentPage + 1)
  }
  const onLastPage = () => {
    getCommentList(currentPage - 1)
  }

  return (
    <div className='comment-list-page'>
      <List >
        {
          comentLists.map((comment) => {
            return (<>
              <List.Item>
                [<a>回复</a>]
                <a className='mr0-5' onClick={() => history.push(routeTemplate(routers.user_profile, { uid: comment.commentUid }))} >{comment.commentUsername}</a>
                {comment.replyUsername && <span className='mr0-5' >回复 <a onClick={() => history.push(routeTemplate(routers.user_profile, { uid: comment.replyUid }))}>{comment.replyUsername}</a></span>}
                : {comment.content}
                <span> ({comment.commentTime})</span>
                { <a >删除</a>}
              </List.Item>
            </>)
          })
        }
      </List>
      <PaginationBtn
        onNextPage={onNextPage}
        onLastPage={onLastPage}
        isDisableNextPageBtn={currentPage >= Math.ceil(totalNum / 10)}
        isDisableLastPageBtn={currentPage === 1}
      />
      <FooterRouteBtn />
      <div>
        <p className='block-header' >
          <Space>

            [<a>发表主题</a>]
            <a>最新</a>
            <span>-</span>
            <a>搜索</a>
          </Space>
        </p>
        <MoreArticleList />
      </div>
    </div>
  )
}

export default CommentList