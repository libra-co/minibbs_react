/*
 * @Author: liuhongbo 916196375@qq.com
 * @Date: 2023-03-08 22:10:28
 * @LastEditors: liuhongbo 916196375@qq.com
 * @LastEditTime: 2023-03-08 22:48:49
 * @FilePath: \MINIBBS_REACT\config\proxy.ts
 * @Description: 代理
 */

export default {
    dev: {
        '/api': {
            target: 'http://139.155.5.202:3000/',
            changeOrigin: true,
            pathRewrite: { '^/api': '/' },
        },
    },
    test: {
        '/api': {
            target: 'http://139.155.5.202:3000/',
            changeOrigin: true,
            pathRewrite: { '^/api': '/' },
        },
    },
    pre: {
        '/api': {
            target: 'your pre url',
            changeOrigin: true,
            pathRewrite: { '^': '' },
        },
    },
    // mock: {
    //   '/sys/api/': {
    //     target: mock.target,
    //     changeOrigin: true,
    //     pathRewrite: { '/sys/api/': `${mock.prefix}/sys/api/` },
    //   },
    //   '/static/copyright.json': {
    //     target: mock.target,
    //     changeOrigin: true,
    //     pathRewrite: { '/static/copyright.json': `${mock.prefix}/static/copyright.json` },
    //   },
    // },
};