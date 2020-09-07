// 引入模块
const path = require('path')
module.exports = {
    devServer: {
        port:3003,
        proxy: {
            "server":{
                target:'https://api.mall.kuazhu.com',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/server':''
                }
            }
        }
    },
    // devServer: {
    //     port:3003,
    //     open: process.platform === 'darwin',
    //     host: '0.0.0.0',
    //     https: false,
    //     hotOnly: false,
    //     proxy: 'https://api.mall.kuazhu.com', // 设置代理
    //     before: app => {}
    // },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/index.less')
            ]
        }
    },
    chainWebpack:config =>{
        config.resolve.alias
        .set('pages',path.resolve(__dirname,'./src/pages'))
        .set('api',path.resolve(__dirname,'./src/api'))
    },
}
