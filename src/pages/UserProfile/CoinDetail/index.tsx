import { coinRecordList } from '@/utils/service/user'
import React, { RefObject, useEffect, useState } from 'react'
import { CoinRecordListParams, CoinRecordListItem, datepickerData, CoinDetailTable } from './const'
import { coinOperationTypeCn } from '../const'
import './index.less'
import { Button, DatePickerRef, ErrorBlock, Form, Input, Picker, Radio, Space } from 'antd-mobile'
import { history } from 'umi'
import routers, { routeTemplate } from '@/utils/routers'
import PaginationBtn from '@/components/PaginationBtn'
import FooterRouteBtn from '@/components/FooterRouteBtn'

const CoinDetail = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [recordList, setRecordList] = useState<CoinRecordListItem[]>([])
    const [totalNum, setTotalNum] = useState<number>(0)
    const [currentQuery, setCurrentQuery] = useState<CoinDetailTable>({} as CoinDetailTable)
    const [isShowDatePicker, setisShowDatePicker] = useState<boolean>(false)
    const [form] = Form.useForm<CoinDetailTable>()

    useEffect(() => {
        getCoinRecordList()
    }, [])

    const pageSize = 15

    const getCoinRecordList = async (qeury?: CoinDetailTable & { pageNum?: number }) => {
        const query = {
            pageNum: currentPage,
            pageSize: pageSize,
            ...qeury,
            operationType: qeury?.operationType?.[0] === '' ? undefined : Number(qeury?.operationType?.[0])
        }
        try {
            const { result: { dataList, total, pageSize }, status } = await coinRecordList(query)
            if (status === 200) {
                setRecordList(dataList)
                setTotalNum(total)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleClickFinish = async (values: CoinDetailTable) => {
        await form.validateFields()
        setCurrentPage(1)
        getCoinRecordList({ ...values })
        setCurrentQuery(values)
    }

    const handleClickNextPage = () => {
        const newPageNum: number = currentPage + 1
        setCurrentPage(newPageNum)
        getCoinRecordList({ ...currentQuery, pageNum: newPageNum })
    }

    const handleClickLastPage = () => {
        const newPageNum: number = currentPage - 1
        setCurrentPage(newPageNum)
        getCoinRecordList({ ...currentQuery, pageNum: newPageNum })
    }

    const handleJumpPage = (pageNum: number) => {
        getCoinRecordList({ ...currentQuery, pageNum })
    }

    return (
        <div className='coin-detail-page'>
            <p className='page-header'>账目明细</p>
            <Form
                onFinish={handleClickFinish}
                layout='horizontal'
                footer={<Button onClick={form.submit} block color='primary'>查询</Button>}
                form={form}
            >
                <Form.Item shouldUpdate>

                    <Space>
                        <Form.Item
                            trigger='onChange'
                            style={{ '--prefix-width': '40px' }} name='year' label='年' rules={[() => {
                                return {
                                    validator(rule, value: any, callback: (error?: string | undefined) => void) {
                                        const isRequire = Boolean(form.getFieldValue('day') || form.getFieldValue('month')) && !value
                                        if (value === 0) return Promise.reject('年份不能为0')
                                        if (isRequire) return Promise.reject('年份不能为空!')
                                        return Promise.resolve()
                                    }
                                }
                            }]}>
                            <Input type='number' style={{ width: 50 }} />
                        </Form.Item>
                        <Form.Item
                            style={{ '--prefix-width': '40px' }} name='month' label='月' rules={[() => {
                                return {
                                    validator(rule, value) {
                                        const isRequire = Boolean(form.getFieldValue('day')) && !value
                                        if (value === 0) return Promise.reject('月份不能为0')
                                        if (isRequire) return Promise.reject('月份不能为空!')
                                        return Promise.resolve()
                                    }
                                }
                            }]}>
                            <Input type='number' style={{ width: 50 }} />
                        </Form.Item>
                        <Form.Item style={{ '--prefix-width': '40px' }} name='day' label='日'>
                            <Input type='number' style={{ width: 50 }} />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item
                            name='operationType'
                            style={{ '--prefix-width': '50px' }}
                            label=''
                            trigger='onConfirm'
                            initialValue={['']}
                            onClick={(e, datePickerRef: RefObject<DatePickerRef>) => { datePickerRef.current?.open() }}
                            rules={[() => {
                                return {
                                    validator(rule, value) {
                                        const isRequire = Boolean(form.getFieldValue('keyword')) && !value
                                        if (isRequire) return Promise.reject('关键词所属类型不能为空!')
                                        return Promise.resolve()
                                    }
                                }
                            }]}
                        >
                            <Picker columns={datepickerData} >
                                {(items, { open }) => {
                                    return (
                                        <Space align='center'>
                                            <Button onClick={open}>选择类型</Button>
                                            {items.every(item => item === null)
                                                ? '未选择'
                                                : items.map(item => item?.label ?? '未选择').join(' - ')}
                                        </Space>
                                    )
                                }}
                            </Picker>
                        </Form.Item>
                        {/* <Form.Item name='keyword' label='关键字' style={{ '--prefix-width': '65px' }}>
                            <Input style={{ width: 90 }} />
                        </Form.Item> */}
                    </Space>
                </Form.Item>

            </Form>
            <table className='coin-detail-page-table'>
                <tbody>
                    <tr className='table-header'>
                        <td>项目</td>
                        <td>交易数量</td>
                        <td>帐户余额</td>
                        <td>操作者</td>
                        <td>时间</td>
                    </tr>
                    {recordList.map(item => {
                        return <tr key={item.cfid}>
                            <td>{coinOperationTypeCn[item.operationType]}</td>
                            <td>{item.changeNum}</td>
                            <td>{item.balance}</td>
                            <td><Space direction='vertical'><a onClick={() => history.push(routeTemplate(routers.user_profile, { uid: item.operatorUid }))}>{item.operatorUsername}</a><span>{item.operatorUid}</span></Space></td>
                            <td className='operate-time-td'>{item.operationTime}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            {recordList.length === 0 &&  <ErrorBlock status='empty' />}
            <PaginationBtn
                onNextPage={handleClickNextPage}
                onLastPage={handleClickLastPage}
                isDisableNextPageBtn={currentPage >= Math.ceil(totalNum / pageSize)}
                isDisableLastPageBtn={currentPage <= 1}
                quickJump={{
                    currentPage: currentPage,
                    totalPage: Math.ceil(totalNum / pageSize),
                    totalDataNum: totalNum,
                    handleClickJumpPage: handleJumpPage
                }}
            />
            <FooterRouteBtn />
        </div>
    )
}

export default CoinDetail