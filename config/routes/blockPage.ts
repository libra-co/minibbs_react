/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-24 16:06:49
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-24 16:11:17
 * @FilePath: /minibbs_react/config/routes/blockPage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import routers from "../../src/utils/routers";

export default [
    {
        path: routers.blockPage,
        name: 'Block Page',
        component: '@/pages/BlockPage'
    },
]