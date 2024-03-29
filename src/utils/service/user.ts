/*
* @Author: liuhongbo liuhongbo@dip-ai.com
* @Date: 2023-03-02 15:53:54
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-23 11:25:23
* @FilePath: /minibbs_react/src/utils/service/user.ts
* @Description: user api
*/

import { LoginParams, LoginResult, UserProfileResult } from "@/pages/Login/const";
import { UserDetailProfileInterface } from "@/pages/UserProfile/UerDetailProfile/const";
import { UserArticleListParams, UserArticleListResult } from "@/pages/ArticleList/const";
import { BookMarkListParams, BookMarkListResult } from "@/pages/UserProfile/UserBooked/const";
import { MailListParams, MailListResult } from "@/pages/UserProfile/UserMail/const";
import { UserCommentListParams, UserCommentListResult } from "@/pages/UserProfile/UserReply/const";
import request, { IResponse } from "../request";
import { PaginationInterface } from "../commonInterface";
import { CoinRecordListParams, CoinRecordListResult } from "@/pages/UserProfile/CoinDetail/const";

export function login(params: LoginParams): Promise<IResponse<LoginResult>> {
    return request('/login', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 查询用户基础信息
 * @param uid 不传时查询当前登录账户的信息 
 */
export function userProfile(params: { uid?: number }): Promise<IResponse<UserProfileResult>> {
    return request('/user/profile', {
        method: 'GET',
        params: { ...params }
    })
}

/**
 * @description 查询用户基础信息
 * @param uid 不传时查询当前登录账户的信息
 */
export function userDetailProfile(params: { uid?: number }): Promise<IResponse<UserDetailProfileInterface>> {
    return request('/user/detailProfile', {
        method: 'GET',
        params: { ...params }
    })
}

/**
 * @description 查询用户发表的文章
 */
export function articleList(params: UserArticleListParams): Promise<IResponse<UserArticleListResult>> {
    return request('/article/list', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 查询用户发表的评论
 */
export function userCommentList(params: UserCommentListParams): Promise<IResponse<UserCommentListResult>> {
    return request('/comment/userCommentList', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 查询用户收藏的帖子列表
 */
export function bookMarkList(params: BookMarkListParams): Promise<IResponse<BookMarkListResult>> {
    return request('/bookMark/list', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 查询用户收藏的帖子列表
 */
export function bookMarkDelete(params: { bmid: string }): Promise<IResponse> {
    return request('/bookMark/delete', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 查询用户收藏的帖子列表
 */
export function mailList(params: MailListParams): Promise<IResponse<MailListResult>> {
    return request('/mail/list', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 查询用户收藏的帖子列表
 */
export function mailDelete(params: { mid: string }): Promise<IResponse> {
    return request('/mail/delete', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 标记已读
 */
export function mailRead(params: { mid: string }): Promise<IResponse> {
    return request('/mail/read', {
        method: 'POST',
        params: { ...params }
    })
}

/**
 * @description 用户金币变更记录
 */
export function coinRecordList(params: CoinRecordListParams): Promise<IResponse<CoinRecordListResult>> {
    return request('/coinRecord/list', {
        method: 'POST',
        params: { ...params }
    })
}
