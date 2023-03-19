/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-09 22:27:49
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-19 13:32:18
 * @FilePath: \MINIBBS_REACT\src\pages\UserCenter\const.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * @description 会员身份
 * @param 0 allPower 至高无上，属于站长
 * @param 1 ordinaryVip 普通会员
 * @param 2 smallVip  小会员
 * @param 3 BipVip  大会员
 */
export enum IdentityEnum {
    '无上之主',
    '普通会员',
    '小会员',
    '大会员',
}

/**
 * @description 角色枚举
 * @param user 普通用户
 * @param blockManager 板块管理
 * @param ZoneManager 分区管理
 * @param SiteOwner 站点管理
 */
export enum RoleEnum {
    '普通',
    '板块管理',
    '分区管理',
    '站点管理'
}