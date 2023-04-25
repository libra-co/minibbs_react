/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-25 14:13:26
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-25 14:13:52
 * @FilePath: /minibbs_react/src/pages/BlockPage/const.ts
 * @Description: 
 */
export interface ZoneListResult {
    zid: string;
    zoneName: string;
    blockList: BlockList[];
}

export interface BlockList {
    blid: string;
    blockName: string;
    zid: string;
    priority: number;
}