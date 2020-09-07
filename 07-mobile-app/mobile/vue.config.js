// 引入模块
const path = require('path')

module.exports = {
    devServer: {
        port:3003
    },
    // module: {
    //     rules: [
    //       //  省略已有配置
    //       {
    //         test: /\.less$/,
    //         loader: "style-loader!css-loader!less-loader",
    //       }
    //     ]
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
