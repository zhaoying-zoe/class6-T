import {ADD_TODO,DEl_TODO,DEl_All} from '../store/types.js'

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
}