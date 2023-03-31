import { PaginationInterface } from "@/utils/commonInterface";

/**
 * @api /comment/list
 */
export interface CommentListParams extends PaginationInterface {
    aid: string
}

/**
 * @api /comment/list
 */
export interface CommentListResult extends PaginationInterface {
    dataList: CommentListItem[];
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