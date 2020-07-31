import { combineReducers } from 'redux';// 引入redux里的combineReducers
import { reducer as todolistReducer } from 'pages/todolist/store/index.js';// 引入todolist中的reducer
import { reducer as homeReducer } from 'pages/home/store/index.js';// 引入home中的reducer


export default combineReducers({
	// todolist:todolistReducer
	todolist:todolistReducer,
	home:homeReducer
})
