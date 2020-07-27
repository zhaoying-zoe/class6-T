import React from 'react';
import ReactDom from 'react-dom';

function timer(){
	// 定义html结构
	const element = (
		<h1>北京时间:</h1>
		<p>{new Date().toLocaleString()}</p>
	)
	// 渲染前台html结构
	ReactDom.render(
		render(){
			// 将html结构传到前台
			element,
			document.getElementById('root')
		}
	)
}

// 每秒钟执行一次函数,用来更新时间
setInterval(timer,1000);