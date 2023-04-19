/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 09:46:22
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-19 14:18:33
 * @FilePath: /minibbs_react/src/pages/UserProfile/const.ts
 * @Description: 
 */
/**
 * @description 金币操作枚举
 * @param Login 登录
 * @param PostArtical 发帖
 * @param DeleteArtical 删帖
 * @param ReplyArtical 发评论
 * @param DeleteReply 删评论
 * @param ReplyComment 回复评论
 * @param DeleteComment 删除评论
 * @param DownloadDetachmentFile 下载附件
 * @param BuyBadge 购买勋章
 * @param Tranfer 转账
 * @param EventRewards 活动奖励
 * @param SystemOperation 系统操作
 * @param Game 游戏操作
 */
export enum CoinOperationType {
    Login,
    PostArtical,
    DeleteArtical,
    ReplyArtical,
    DeleteReply,
    ReplyComment,
    DeleteComment,
    DownloadDetachmentFile,
    BuyBadge,
    Tranfer,
    EventRewards,
    SystemOperation,
    Game
}

export const coinOperationTypeCn = {
    [CoinOperationType.Login]: '登录',
    [CoinOperationType.PostArtical]: '发帖',
    [CoinOperationType.DeleteArtical]: '删帖',
    [CoinOperationType.ReplyArtical]: '发评论',
    [CoinOperationType.DeleteReply]: '删评论',
    [CoinOperationType.ReplyComment]: '回复评论',
    [CoinOperationType.DeleteComment]: '删除评论',
    [CoinOperationType.DownloadDetachmentFile]: '下载附件',
    [CoinOperationType.BuyBadge]: '购买勋章',
    [CoinOperationType.Tranfer]: '转账',
    [CoinOperationType.EventRewards]: '活动奖励',
    [CoinOperationType.SystemOperation]: '系统操作',
    [CoinOperationType.Game]: '游戏操作',
}