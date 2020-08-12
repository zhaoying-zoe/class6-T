const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getHtmlConfig = (name,title)=>({
    template:'./src/views/'+name+'.html',//模板文件
    filename:name+'.html',//输出的文件名
    title:title,
    // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
    hash:true,//给生成的js/css文件添加一个唯一的hash
    chunks:['common',name]
})

module.exports = {
	//指定开发环境
	mode: "development", // "production" | "development" | "none"
	// mode: "production", // "production" | "development" | "none"

	// 这里应用程序开始执行
  	// webpack 开始打包
  	//单一入口
	// entry: "./src/index.js",
	//多入口
	entry:{
		'index': 					 './src/pages/index/index.js',
		'common': 					 './src/pages/common/index.js',
		'list': 				 	 './src/pages/list/index.js',
		'user-login': 				 './src/pages/user-login/index.js',
	},
	// 加上对应的配置
	devtool:'inline-source-map',
	//输出
	output: {// webpack 如何输出结果的相关选项
		// 所有输出文件的目标路径
   		// 必须是绝对路径（使用 Node.js 的 path 模块）
		path: path.resolve(__dirname, "dist"), // string

		// 「入口分块(entry chunk)」的文件名模板（出口分块？）
		filename: "js/[name]-[hash]-bundle.js", // string  
		//配置静态资源路径
		publicPath:'/' 
	},
    //配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            node_modules:path.resolve(__dirname,'./node_modules'),
            util:path.resolve(__dirname,'./src/util'),
        }
    },
	module: {
	    rules: [
	    /*
	    	//处理CSS
	      {
	        test: /\.css$/,
	        use: [
	          'style-loader',
	          'css-loader'
	        ]
	      },
	      */
	     // 打包css文件配置
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                }
              },
              "css-loader"
            ]
          },
	      //处理图片资源
	      {
			test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)\??.*$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			options: {
			      			limit: 10,
			      			name: 'resource/[name].[ext]'
			    		}
			  		}
				]
			},
			//配置babel
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            // presets: ['env', 'react'],
			            presets: ['env','es2015','stage-3'],
			        }
			    }               
			},
	    ]
	 },
	plugins:[
   		//自动生成HTML
	    new htmlWebpackPlugin(getHtmlConfig('index','首页')),
	    new htmlWebpackPlugin(getHtmlConfig('list','列表页')),
	    new htmlWebpackPlugin(getHtmlConfig('user-login','登录页')),
	    //自动清理多余文件
	    new CleanWebpackPlugin(),
	    // css文件单独打包
	    new MiniCssExtractPlugin({
			filename:'css/[name]-[hash]-bundle.css'
	    })
	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:3002,//服务运行的端口,
	    proxy: [{
		  	context: ["/sessions"],
		  	//请求地址是以context内部的值开头的路由全部代理到target提供的地址下
		  	target: "http://127.0.0.1:3000",
		}]
	}
}