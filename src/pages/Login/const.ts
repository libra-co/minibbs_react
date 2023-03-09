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
  expireTime?: any;
  badge: string[];
}

// test001