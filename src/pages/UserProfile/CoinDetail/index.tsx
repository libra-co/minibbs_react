import { CoinRecordList } from '@/utils/service/user'
import React, { RefObject, useEffect, useState } from 'react'
import { CoinRecordListParams, CoinRecordListItem, datepickerData, CoinDetailTable } from './const'
import { coinOperationTypeCn } from '../const'
import './index.less'
import { Button, DatePickerRef, Form, Input, Picker, Radio, Space } from 'antd-mobile'
import { history } from 'umi'
import routers, { routeTemplate } from '@/utils/routers'

const CoinDetail = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [recordList, setRecordList] = useState<CoinRecordListItem[]>([])
    const [isShowDatePicker, setisShowDatePicker] = useState<boolean>(false)
    const [form] = Form.useForm<CoinDetailTable>()

    useEffect(() => {
        getCoinRecordList()
    }, [])

    const getCoinRecordList = async () => {
        const query: CoinRecordListParams = {
            pageNum: currentPage,
            pageSize: 15,
        }
        try {
            const { result: { dataList }, status } = await CoinRecordList(query)
            if (status === 200) {
                setRecordList(dataList)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleClickFinish = (values: CoinDetailTable) => {
        console.log('values', values)
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
                            // dependencies={['month', 'day']}
                            style={{ '--prefix-width': '40px' }} name='year' label='年' rules={[{ required: Boolean(form.getFieldsValue().day || form.getFieldsValue().month), message: '年份不能为空' }]}>
                            {() => <Input type='number' style={{ width: 50 }} />}
                        </Form.Item>
                        <Form.Item
                            // dependencies={['day']}
                            style={{ '--prefix-width': '40px' }} name='month' label='月' rules={[{ required: Boolean(form.getFieldsValue().day), message: '月份不能为空' }]}>
                            <Input type='number' style={{ width: 50 }} />
                        </Form.Item>
                        <Form.Item style={{ '--prefix-width': '40px' }} name='day' label='日'>
                            <Input type='number' style={{ width: 50 }} />
                        </Form.Item>
                    </Space>
                    <Space>
                        <Form.Item

                            name='type'
                            // dependencies={['keyword']}
                            style={{ '--prefix-width': '50px' }}
                            label=''
                            trigger='onConfirm'
                            initialValue={['']}
                            onClick={(e, datePickerRef: RefObject<DatePickerRef>) => { datePickerRef.current?.open() }}
                            rules={[{ required: Boolean(form.getFieldsValue().keyword), message: '请要查询的选择关键字类型' }]}
                        >
                            <Picker
                                columns={datepickerData}
                                onSelect={(val, extend) => {
                                    console.log('onSelect', val, extend.items)
                                }}
                            >
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
                        <Form.Item name='keyword' label='关键字' style={{ '--prefix-width': '65px' }}>
                            <Input style={{ width: 90 }} />
                        </Form.Item>
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
        </div>
    )
}

export default CoinDetail