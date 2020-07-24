// 输出用到读文件
const path = require('path');
// 自动生成HTML
const htmlWebpackPlugin = require('html-webpack-plugin');
// 清理输出文件夹(清理没用的文件)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
	// 生产环境配置信息
	mode: "development", // "production" | "development" | "none"
	// 单一输入  entry: "./src/index.js", // string | object | array

	// 多输入
	entry: {
		index: './src/index.js'
	},
	// 输出
	output: {
		// filename: '[name]-bundle.js',
		filename: '[name]-[hash]-bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			//处理css
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			//处理图片 
			{
				test: /\.(png|jpg|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: { // 配置信息
						limit: 10 // 如果设置的图片超过10 就会在list文件夹下生成一个图片
					}
				}]
			},
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
			        loader: 'babel-loader',
			        options: {
			            presets: ['env', 'react']
			        }
			    }               
			}
		]
	},
	// 自动生成html
	plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true,//给生成的js/css文件添加一个唯一的hash
	        chunks:[ 'index' ]// 设置哪一个文件生效
	    }),
	    new CleanWebpackPlugin()
	],
	devServer:{
		contentBase: './dist',//内容的目录
		port:8080//服务运行的端口
	}
};