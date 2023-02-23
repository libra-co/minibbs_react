/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-02-23 10:55:54
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-02-23 13:52:40
 * @FilePath: /minibbs_react/src/utils/request.ts
 * @Description: 封装request
 */

import { Toast } from 'antd-mobile';
import { baseUrl } from 'config/const';
import { history } from 'umi';
import { extend, ResponseError } from 'umi-request';
import { TokenKey } from './token';

// request option
const requestConf = {
  // errorHandler,
  prefix: '',
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  credentials: 'include',
};

const codeMessage: any = {
  100: '内部错误/数据库增删改查操作失败。',
  102: '用户登陆失效，需重新登陆。',
  103: '用户名或密码错误。',
  104: '定期修改密码。',
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const request = extend(Object.assign({ timeout: 8000, ...requestConf }));

request.interceptors.request.use((url, options) => {
  console.log('options', options);
  const token = window.localStorage.getItem(TokenKey);
  const { noSign, requestType } = options;
  const method = options.method?.toLowerCase();

  // 配置服务地址 - beroreUrl
  console.log('options.beroreUrl', options.beroreUrl);
  // let beroreUrl: string = options.beroreUrl ?? '/api/web'
  // if (isProduct) beroreUrl = ''

  // 不需要默认参数 - noSign
  if (noSign) {
    return {
      // url: beroreUrl + url,
      url: baseUrl + url,
      options: { ...options },
    };
  }
  // 默认参数
  const initQuery = {};
  let assignData = Object.assign(initQuery, options.data);
  let assignParams = Object.assign(initQuery, options.params);
  // 添加请求头
  const headers: any = { ...options.headers };
  if (token) {
    headers[TokenKey] = token;
  }
  // 文件格式
  if (requestType === 'form') {
    // headers['Content-Type'] = 'multipart/form-data; boundary=----WebKitFormBoundary7TMYhSONfkAM2z3a'
    // headers['Accept'] = '*'
    delete headers['Content-Type'];
    delete headers['Accept'];
    assignData = options.data;
  }
  if (method === 'get') {
    delete headers['Content-Type'];
  }
  let optionsInit: any = {
    ...options,
    headers: { ...headers },
    data: assignData,
    params: assignParams,
  };
  if (method === 'post') {
    delete optionsInit.params;
  } else if (method === 'get') {
    delete optionsInit.data;
  }
  return {
    url: url,
    options: { ...optionsInit },
  };
});

//拦截器
request.interceptors.response.use(async (response, options) => {
  const { noRedirect = false, responseType } = options;
  try {
    // 克隆响应对象做解析处理
    // 这里的res就是我们请求到的数据
    const result = await response.clone().json();

    // 定期修改密码。
    if (result && result.status === 104) {
      console.log('密码过期，跳转到登录页面');
      // history.push(routers.changepassword)
    }

    // noRedirect为true时，不需要校验
    if (
      (!noRedirect && result && result.status === 102) ||
      (!noRedirect && result && result.status === 10000)
    ) {
      Toast.show({
        content: result.message,
        afterClose: () => {
          console.log('after');
        },
      });
    }
    // 重定向 - 清除 token
    window.localStorage.removeItem(TokenKey);
    console.log('需要填转到登录页面或者主页');
    // window.location.href = getCookie(RedirectKey) || cloud_domain

    return result;
  } catch (error) {
    // error 说明不是个json
    return response;
    if (responseType === 'blob') {
      // 响应数据为 blob 类型时，不需要解析，直接返回数据流
    }
  }
});

export default request;
