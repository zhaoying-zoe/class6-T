import { createStore } from 'redux';// 引入创建生成Store的方法
import reducer from './reducer.js'

// 1.生成Store
const store = createStore(reducer);// 2.传入的参数就是Reducers(Reducers应为函数:专门用来处理数据)

export default store;// 导出模块