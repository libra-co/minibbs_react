/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-24 16:03:44
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-24 16:07:48
 * @FilePath: /minibbs_react/src/utils/routers/blockPage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
    {
        module: '/bbs_block',
        paths: [
            { name: 'blockPage', value: '/' },
        ]
    }
]

export interface BlockPageRouters {
    blockPage: string
}