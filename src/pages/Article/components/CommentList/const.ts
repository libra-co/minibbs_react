/**
 * @api /comment/list
 */
export interface CommentListParams {
    aid: string
    pageNum: number,
    pageSize: number,
}

/**
 * @api /comment/list
 */
export interface CommentListResult {
    dataList: CommentListItem[];
    pageNum: number;
    pageSize: number;
    total: number;
}

export interface CommentListItem {
    cid: string;
    commentUid: number;
    commentUsername: string;
    commentTime: string;
    content: string;
    replyUid: number;
    replyUsername: string;
}