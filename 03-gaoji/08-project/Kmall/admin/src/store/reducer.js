/*
* @Author: Chen
* @Date:   2019-12-01 17:24:50
* @Last Modified by:   Chen
* @Last Modified time: 2019-12-05 16:00:05
*/
// import { combineReducers } from 'redux'
import {combineReducers} from 'redux-immutable'
import {reducer as todolistReducer} from 'pages/todolist/store/index.js'
import {reducer as loginReducer} from 'pages/login/store/index.js'
import {reducer as homeReducer} from 'pages/home/store/index.js'
import {reducer as userReducer} from 'pages/user/store/index.js'
import {reducer as categoryReducer} from 'pages/category/store/index.js'
import {reducer as productReducer} from 'pages/product/store/index.js'
import {reducer as adReducer} from 'pages/ad/store/index.js'

export default combineReducers({
	home:homeReducer,
	login:loginReducer,
	user:userReducer,
	category:categoryReducer,
	product:productReducer,
	ad:adReducer,
})