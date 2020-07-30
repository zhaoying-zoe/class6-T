import { createStore,applyMiddleware } from 'redux';// 引入创建生成Store的方法
import reducer from './reducer.js'
import thunk from 'redux-thunk';

// 1.生成Store
// 2.传入的参数①就是Reducers(Reducers应为函数:专门用来处理数据)
// 3.传入的参数②是中间件配置
const store = createStore(reducer,applyMiddleware(thunk));

export default store;// 导出模块