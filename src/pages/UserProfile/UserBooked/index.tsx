import { useParams } from 'umi'
import { List, Space, Toast } from 'antd-mobile'
import React, { useEffect, useState } from 'react'
import PaginationBtn from '@/components/PaginationBtn'
import FooterRouteBtn from '@/components/FooterRouteBtn'
import { BookMarkListItem, BookMarkListParams } from './const'
import { bookMarkDelete, bookMarkList } from '@/utils/service/user'

const UserBooked = () => {
    const [bookmarkList, setBookmarkList] = useState<BookMarkListItem[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isShowPaginationBtn, setIsShowPaginationBtn] = useState<boolean>(false)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [totalDataNum, setTotalDataNum] = useState<number>(0)
    const routerParams = useParams<{ uid: string }>()

    useEffect(() => {
        getBookmark()
    }, [])

    const getBookmark = async (currentPageNum?: number) => {
        const query: BookMarkListParams = {
            uid: +routerParams.uid!,
            pageNum: currentPageNum || currentPage,
            pageSize: 10,
        }

        try {
            const { result: { dataList, total, pageNum, pageSize }, status } = await bookMarkList(query)
            if (status === 200) {
                setBookmarkList(dataList)
                setCurrentPage(pageNum)
                setIsShowPaginationBtn(Math.ceil(total / pageSize) > 1)
                setTotalPage(Math.ceil(total / pageSize))
                setTotalDataNum(total)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleClickDelete = async (bmid: string) => {
        try {
            const { status, message } = await bookMarkDelete({ bmid })
            if (status === 200) {
                getBookmark(currentPage)
            }
            Toast.show(message)
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleClickNextPage = () => {
        getBookmark(currentPage + 1)
    }

    const handleClickLastPage = () => {
        getBookmark(currentPage - 1)
    }
    return (
        <div className='user-booked-page'>
            <List header={
                <div>收藏列表</div>
            }>
                {bookmarkList.map((bookmark, index) => (
                    <List.Item
                        key={bookmark.bmid}
                        description={<span>{bookmark.bookMarkTime} </span>}
                    >
                        <Space>{`${((currentPage - 1) * 10) + 1 + index}.`}<a >{`${bookmark.title}`}</a> <a onClick={() => handleClickDelete(bookmark.bmid)} >[ 删除 ]</a></Space>
                    </List.Item>
                ))}
            </List>
            {isShowPaginationBtn && <PaginationBtn
                onNextPage={handleClickNextPage}
                onLastPage={handleClickLastPage}
                isDisableLastPageBtn={currentPage - 1 < 1}
                isDisableNextPageBtn={currentPage + 1 > totalPage}
                quickJump={{ currentPage, totalPage, totalDataNum, handleClickJumpPage: getBookmark }}
            />}
            <FooterRouteBtn />
        </div>)
}

export default UserBooked