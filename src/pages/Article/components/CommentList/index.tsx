/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-25 17:21:10
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-18 17:07:07
 * @FilePath: \MINIBBS_REACT\src\pages\Article\components\CommentList\index.tsx
 * @Description: 评论列表
 */

import MoreArticleList from '@/components/MoreArticleList'
import PaginationBtn from '@/components/PaginationBtn'
import routers, { routeTemplate } from '@/utils/routers'
import { commentDelete, commentList } from '@/utils/service/article'
import { List, Space, Toast } from 'antd-mobile'
import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { history } from 'umi'
import { ReplyCommentInfo } from '../../const'
import { CommentListItem } from './const'
import './index.less'

interface Props {
  aid: string
  handleClickReplyComent: React.Dispatch<React.SetStateAction<ReplyCommentInfo>>
  loginUid: number
}

const CommentList = ({ aid, handleClickReplyComent, loginUid }: Props, ref: ForwardedRef<{ refreshCommentList: () => void } | undefined>) => {
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

  const handleClickDelete = async (cid: string) => {
    try {
      const { status, message } = await commentDelete({ cid })
      if (status === 200) {
        Toast.show({
          content: message,
          duration: 500,
        })
        getCommentList(currentPage)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  useImperativeHandle(ref,
    () => ({ refreshCommentList: () => getCommentList(currentPage) }),
    [],
  )

  return (
    <div className='comment-list-page'>
      <List >
        {
          comentLists.map((comment) => {
            return (<>
              <List.Item key={comment.cid}>
                [<a onClick={() => handleClickReplyComent({ rcid: comment.cid, ruid: comment.commentUid })}>回复</a>]
                <a className='mr0-5' onClick={() => history.push(routeTemplate(routers.user_profile, { uid: comment.commentUid }))} >{comment.commentUsername}</a>
                {comment.replyUsername && <span className='mr0-5' >回复 <a onClick={() => history.push(routeTemplate(routers.user_profile, { uid: comment.replyUid }))}>{comment.replyUsername}</a></span>}
                : {comment.content}
                <span> ({comment.commentTime})</span>
                {comment.commentUid === loginUid && <a onClick={() => handleClickDelete(comment.cid)} className='margin-left-5'>删除</a>}
              </List.Item>
            </>)
          })
        }
      </List>
      {comentLists.length > 0 && <PaginationBtn
        onNextPage={onNextPage}
        onLastPage={onLastPage}
        isDisableNextPageBtn={currentPage >= Math.ceil(totalNum / 10)}
        isDisableLastPageBtn={currentPage === 1}
      />}
      <div>

      </div>
    </div>
  )
}

export default forwardRef(CommentList)