import {ADD_TODO,DEl_TODO,DEl_All,GET_HOMEADS} from '../store/types.js'
import api from '../../../api'
// 组件中用由this.$store.dispatch方法来派发action,action中用commit来提交mutation
export default {
    [ADD_TODO]:function(store,todo){
        store.commit(ADD_TODO,todo)
        // console.log(store);
        // console.log(todo);
    },
    [DEl_TODO]:function(store,index){
        store.commit(DEl_TODO,index)
    },
    [DEl_All]:function(store,index){
        store.commit(DEl_All,index)
    },
	async [GET_HOMEADS]({commit}){
        var result = await api.getHomeAds()
        console.log(result);
		if(result.data.code == 0){
			commit(GET_HOMEADS,{homeFloors:result.data.data})
		}
	},
}