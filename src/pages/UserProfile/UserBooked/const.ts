/**
 * @api /bookMark/list
 */
export interface BookMarkListParams {
    uid: number
    pageNum: number,
    pageSize: number,
}

/**
 * @api /bookMark/list
 */
export interface BookMarkListResult {
    dataList: BookMarkListItem[];
    pageNum: number;
    pageSize: number;
    total: number;
}

export interface BookMarkListItem {
    bmid: string;
    aid: string;
    bookMarkTime: string;
    title: string;
}