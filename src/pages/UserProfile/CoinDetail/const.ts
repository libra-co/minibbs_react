
import { PaginationInterface } from "@/utils/commonInterface"
import { CoinOperationType } from "../const"
import { PickerColumn, PickerValue } from "antd-mobile/es/components/picker-view"

export interface CoinRecordListParams extends PaginationInterface {
    uid?: number
    operatorUid?: number
    year?: string
    month?: string
    operationType?: CoinOperationType
    keyword?: string
}

export interface CoinRecordListResult {
    dataList: CoinRecordListItem[];
    pageNum: number;
    pageSize: number;
    total: number;
}

export interface CoinRecordListItem {
    cfid: string;
    changeNum: number;
    operatorUid: number;
    targetUid: number;
    balance: number;
    operationType: CoinOperationType;
    operationTime: string;
    operatorUsername: string;
}

export const datepickerData: PickerColumn[] = [[
    {
        label: '未选择',
        value: '',
    },
    {
        label: '操作名称',
        value: '1',
    },
    {
        label: '操作人',
        value: '2',
    },
    {
        label: '操作昵称',
        value: '3',
    },
]]

export interface CoinDetailTable {
    year?: number
    month?: number
    day?: number
    type?: number[]
    keyword?: string
}