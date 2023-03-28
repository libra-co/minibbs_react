import { history, useParams } from 'umi'
import FooterRouteBtn from '@/components/FooterRouteBtn'
import PaginationBtn from '@/components/PaginationBtn'
import { List } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import { userCommentList } from '@/utils/service/user'
import { UserCommentListParams, UserComentItem } from './const'
import routers, { routeTemplate } from '@/utils/routers'

const UserReply = () => {
    const [replyList, setReplyList] = useState<UserComentItem[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isShowPaginationBtn, setIsShowPaginationBtn] = useState<boolean>(false)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [totalDataNum, setTotalDataNum] = useState<number>(0)
    const routerParams = useParams<{ uid: string }>()

    useEffect(() => {
        getReplyList()
    }, [])

    const getReplyList = async (currentPageNum?: number) => {
        const query: UserCommentListParams = {
            pageNum: currentPageNum || currentPage,
            pageSize: 10,
        }
        if (routerParams.uid !== undefined) {
            query.uid = +routerParams.uid
        }
        try {
            const { result: { dataList, total, pageNum, pageSize }, status } = await userCommentList(query)
            if (status === 200) {
                setReplyList(dataList)
                setCurrentPage(pageNum)
                setIsShowPaginationBtn(Math.ceil(total / pageSize) > 1)
                setTotalPage(Math.ceil(total / pageSize))
                setTotalDataNum(total)
            }
        } catch (error) {

        }
    }

    const handleClickNextPage = () => {
        getReplyList(currentPage + 1)
    }

    const handleClickLastPage = () => {
        getReplyList(currentPage - 1)
    }

    return (
        <div className='user-reply-page'>
            <List header={
                <div>回复列表</div>
            }>
                {replyList.map((reply, index) => (
                    <List.Item
                        key={reply.aid}
                        description={<span>{reply.commentTime} <a onClick={() => history.push(routeTemplate(routers.article, { aid: reply.aid }))}>查看</a></span>}
                    >
                        {`${((currentPage - 1) * 10) + 1 + index}.${reply.content}`}
                    </List.Item>
                ))}
            </List>
            {isShowPaginationBtn && <PaginationBtn
                onNextPage={handleClickNextPage}
                onLastPage={handleClickLastPage}
                isDisableLastPageBtn={currentPage - 1 < 1}
                isDisableNextPageBtn={currentPage + 1 > totalPage}
                quickJump={{ currentPage, totalPage, totalDataNum, handleClickJumpPage: getReplyList }}
            />}
            <FooterRouteBtn />
        </div>
    )
}

export default UserReply