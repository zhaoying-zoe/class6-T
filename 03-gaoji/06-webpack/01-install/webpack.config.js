// 输出用到读文件
const path = require('path');

module.exports = {
	// 生产环境配置信息
	mode: "development", // "production" | "development" | "none"
	// 单一输入  entry: "./src/index.js", // string | object | array

	// 多输入
	entry: {
		about: './src/about.js',
		contact: './src/contact.js',
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
			}
		]
	}
};