/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-03-22 14:18:33
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-03-22 14:39:17
 * @FilePath: /minibbs_react/src/utils/forms.ts
 * @Description: 表单校验
 */
import { regTrimBeforeAfter } from "./regular"

/**
 * @description 表单必填项
 * @param message 必填项错误提示
 * @param maxLength 最大长度
 * @param minLength 最小长度
 * @returns 
 */
export const required = (message: string = '此项必填', maxLength?: number, minLength?: number) => {
  const rules: any[] = [
    {
      required: true,
      message,
    },
    {
      pattern: regTrimBeforeAfter,
      message: '前后禁止输入空格!',
    },
  ]
  if (maxLength !== undefined) {
    rules.push({ max: maxLength, message: `最大长度为${maxLength}` })
  }
  if (minLength !== undefined) {
    rules.push({ min: minLength, message: `最小长度为${minLength}` })
  }
  return rules
}

/**
 * @description 表单选填项
 * @param message 必填项错误提示
 * @param maxLength 最大长度
 * @param minLength 最小长度
 * @returns 
 */
export const optional = (maxLength?: number, minLength?: number) => {
  const rules: any[] = [
    {
      required: false,
      message: '请输入！',
    },
    {
      pattern: regTrimBeforeAfter,
      message: '前后禁止输入空格!',
    },
  ]
  if (maxLength !== undefined) {
    rules.push({ max: maxLength, message: `最大长度为${maxLength}` })
  }
  if (minLength !== undefined) {
    rules.push({ min: minLength, message: `最小长度为${minLength}` })
  }
  return rules
}