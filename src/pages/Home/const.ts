/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-07 22:58:27
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-23 10:23:43
 * @FilePath: \MINIBBS_REACT\src\pages\Home\const.ts
 * @Description: home const
 */

// 首页快捷功能假数据
export const quickActionList = [
    {
        "name": "论坛",
        "route": "",
        "sort": 0
    },
    {
        "name": "游戏",
        "route": "",
        "sort": 1
    },
    {
        "name": "勋章",
        "route": "",
        "sort": 2
    },
    {
        "name": "赚币",
        "route": "",
        "sort": 3
    },
    {
        "name": "组队",
        "route": "",
        "sort": 4
    },
    {
        "name": "搜索",
        "route": "",
        "sort": 5
    },
    {
        "name": "家族",
        "route": "",
        "sort": 6
    },
    {
        "name": "神卡",
        "route": "",
        "sort": 7
    },
    {
        "name": "图床",
        "route": "",
        "sort": 8
    },
    {
        "name": "优惠",
        "route": "",
        "sort": 9
    }
]

// 首页广告连接
export const adList = [
    {
        "content": "外科口罩100只下单9.9",
        "sort": 0,
        "link": ""
    },
    {
        "content": "1.60依视路a4眼镜¥329",
        "sort": 1,
        "link": ""
    },
    {
        "content": "独立kn95口罩50只¥9.9",
        "sort": 2,
        "link": ""
    },
    {
        "content": "天猫无门槛红包每天领",
        "sort": 3,
        "link": ""
    },
    {
        "content": "名流玻尿酸套套36只34",
        "sort": 4,
        "link": ""
    },
    {
        "content": "",
        "sort": 5,
        "link": ""
    }
]

export interface SearchArticleForm {
    keyword: string
}