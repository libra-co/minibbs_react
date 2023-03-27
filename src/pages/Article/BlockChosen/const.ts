/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-27 18:11:10
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-27 18:22:51
 * @FilePath: /minibbs_react/src/pages/Article/BlockChosen/const.ts
 * @Description: blockChosen const
 */

/**
 * @api /block/list
 * @param zid 不传则查询所有分区下的板块
 */
export interface BlockListParams {
    zid?: string
}

/**
 * @api /block/list
 */
export interface BlockListItem {
    blid: string;
    blockName: string;
    zid: string;
}