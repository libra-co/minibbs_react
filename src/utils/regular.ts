/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-22 14:35:47
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-22 14:35:49
 * @FilePath: /minibbs_react/src/utils/regular.ts
 * @Description: 常用正则
 */
export const regUrl =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
export const isUrl = (path: string) => regUrl.test(path)

export const regMobile = /(^(\d{3,4}-)?\d{7,8})$/
export const isMobile = (str: string) => regMobile.test(str)

export const regPhone = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
export const isPhone = (str: string) => regPhone.test(str)

export const regPhoneMobile = /(^(\d{3,4}-)?\d{7,8})$|^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/
export const isPhoneMobile = (str: string) => regPhoneMobile.test(str)

export const regEmail = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
export const isEmail = (str: string) => regEmail.test(str)

// 6到20位（包括字母，数字，下划线，减号）
export const passwordReg = /^[a-zA-Z0-9_-]{6,20}$/

export const regNumber = /^[0-9]*$/
export const isNumber = (str: string) => regNumber.test(str)

export const regNumberFloat = /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
export const isNumberFloat = (str: string) => regNumberFloat.test(str)

//禁止空格
export const regTrim = /^\S+$/
//禁止前后空格
export const regTrimBeforeAfter = /^\S+(\s+\S+)*$/

//YYYY-MM-DD
export const regYYYYMMDD = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/

//DD-MM-YYYY
export const regDDMMYYYY = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-[1-9]\d{3}$/

//MM/DD/YYYY
export const regMMDDYYYYE = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/[1-9]\d{3}$/

//DD/MM/YYYY
export const regDDMMYYYYE = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[1-9]\d{3}$/

//YYYY/MM/DD
export const regYYYYMMDDE = /^[1-9]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/

export const regHtmlTag = /<("[^"]*"|'[^']*'|[^'">])*>/gi

// 一般字符：中文、英文、数字
export const regGeneralCharset = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/

// 版本号
export const regVersion = /^\d+(\.\d+)*$/
export const isVersion = (str: string) => regVersion.test(str)

// 是否包含中文
export const regChineseCharacters =
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
export const isChineseCharacters = (str: string) => regChineseCharacters.test(str)
// 统一社会信用代码
export const socialCode = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
// 带区号的电话号验证
export const areadAndPhone = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/
