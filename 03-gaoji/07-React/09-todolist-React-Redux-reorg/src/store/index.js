import { createStore,applyMiddleware } from 'redux';// 引入创建生成Store的方法
import reducer from './reducer.js'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'// 引入logger


// 定义数组(存放参数)
const middlewares = [];

// 把处理ajax的thunk添加到数组
middlewares.push(thunk);

// 如果node的环境是development,就把logger添加到数组

// 自定义配置logger
const logger = createLogger({
  // ...options
});

if (process.env.NODE_ENV === `development`) {
	// const { createLogger } = require(`redux-logger`);

	middlewares.push(logger);
}

// 1.生成Store
// 2.传入的参数①就是Reducers(Reducers应为函数:专门用来处理数据)
// 3.传入的参数②是中间件配置(参数②的参数①是thunk)
// 4.传入的参数②的参数②是logger
const store = createStore(reducer,applyMiddleware(...middlewares));

export default store;// 导出模块