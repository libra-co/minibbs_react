/**
 * @description 通用接口返回
 */
export type CommonResponse<T = any> = Promise<BasicCommonResponse<T>>;

interface BasicCommonResponse<T = any> extends Response {
  message: string;
  status: number;
  result: T;
}
