export default {
    total:function(state){
        return state.todos.length
    },
    selectTodo:function(state){
        return state.todos.reduce((total,item)=>{
            if(item.tag){
                total = total + 1;
            }
            return total;
        },0)
    },
}