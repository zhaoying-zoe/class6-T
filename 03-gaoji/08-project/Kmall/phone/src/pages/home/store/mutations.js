import {ADD_TODO,DEl_TODO,DEl_All} from '../store/types.js'


export default {
    // 唯一更改state的方法
    // mutation必须是同步函数
    [ADD_TODO](state,todo){
        // state.setter(todo)
        state.todos.unshift(todo);
        // console.log(state);
        // console.log(todo);
    },
    [DEl_TODO](state,index){
        state.todos.splice(index,1);
    },
    [DEl_All](state){
        state.todos = state.todos.filter((item)=>item.tag != true)
    },
}