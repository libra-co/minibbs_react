/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-20 09:46:22
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-04-01 18:10:36
 * @FilePath: /minibbs_react/src/pages/Login/const.ts
 * @Description: Login const
 */
/**
 * @api /login
 */
export interface LoginParams {
  username: string | number
  password: string
}
/**
 * @api /login
 */
export interface LoginResult {
  token: string
  uid: number
}

/**
 * @description 性别枚举
 */
export enum GenderEnum {
  'male',
  'female',
  'unknown',
}

export const genderObj = {
  [GenderEnum.male]: '男',
  [GenderEnum.female]: '女',
  [GenderEnum.unknown]: '外星人',
}

/**
 * @api /user/profile
 */
export interface UserProfileResult {
  friendsNum: number;
  mailNum: number;
  unreadMailNum: number
  replyNum: number;
  username: string;
  coin: number;
  age: number;
  uid: number;
  experience: number;
  level: number;
  identity: number;
  role: number;
  viewNum: number;
  expireTime?: null | string;
  gender: GenderEnum
  badge: string[];
  articleNum: number
}
