
import { PaginationInterface } from "@/utils/commonInterface"
import { CoinOperationType, coinOperationTypeCn } from "../const"
import { PickerColumn, PickerValue } from "antd-mobile/es/components/picker-view"

export interface CoinRecordListParams extends PaginationInterface {
    uid?: number
    operatorUid?: number
    year?: string
    month?: string
    day?: string
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

export const datepickerData: () => PickerColumn[] = () => {
    const data = [{
        label: '未选择',
        value: ''
    }]
    for (const key in coinOperationTypeCn) {
        if (Object.prototype.hasOwnProperty.call(coinOperationTypeCn, key)) {
            data.push({
                label: coinOperationTypeCn[key as unknown as CoinOperationType],
                value: key
            })
        }
    }
    return [data]
}

export interface CoinDetailTable {
    year?: string
    month?: string
    day?: string
    operationType?: [string]
    keyword?: string
}