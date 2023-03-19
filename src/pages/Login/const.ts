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
  [GenderEnum.male]:'男',
  [GenderEnum.female]:'女',
  [GenderEnum.unknown]:'外星人',
}

/**
 * @api /user/profile
 */
export interface UserProfileResult {
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
  expireTime?: null | string;
  gender: GenderEnum
  badge: string[];
  articleNum: number
}

// test001