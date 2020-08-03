import { fromJS } from 'immutable'
const defaultState = fromJS({
	list:[
		{
		    key: '1',
		    username: 'admin',
		    isAdmin: true,
		    email: '11300@qq.com',
		    phone: 123456,
		    CreatedAt: '2020-8-2 11:11:11',
		},
	]		  
})
import {
	CHANGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	LOAD_DATA
} from './actionTypes.js'

export default (state=defaultState,action)=>{
	
	if(action.type == CHANGE_ITEM){
		return state.set('task',action.payload)
	}
	return state
}