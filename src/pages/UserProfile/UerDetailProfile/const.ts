/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 10:38:31
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-20 13:48:11
 * @FilePath: /minibbs_react/src/pages/UserProfile/UerDetailProfile/const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */

import { GenderEnum } from "@/pages/Login/const";

/**
 * @api user/detailProfile
 */
export interface UserDetailProfileInterface {
    friendsNum: number;
    mailNum: number;
    replyNum: number;
    username: string;
    coin: number;
    age: number;
    uid: number;
    experience: number;
    level: number;
    identity: number;
    role: number;
    reviews: number;
    expireTime?: any;
    gender: GenderEnum;
    articleNum: number;
    badge: string[];
    mail: string;
    qqNumber: string;
    activeTime: number;
    createTime: string;
    height?: string;
    weight?: string;
    constellation: ConstellationEn;
    habbit?: string;
    isMarry?: 0 | 1;
    vocation?: string;
    city?: string
}

// 星座枚举
export enum ConstellationEn {
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricornus',
    'Aquarius',
    'Pisces',
}
// 星座枚举
export enum ConstellationToCn {
    '白羊座',
    '金牛座',
    '双子座',
    '巨蟹座',
    '狮子座',
    '处女座',
    '天秤座',
    '天蝎座',
    '射手座',
    '摩羯座',
    '水瓶座',
    '双鱼座',
}