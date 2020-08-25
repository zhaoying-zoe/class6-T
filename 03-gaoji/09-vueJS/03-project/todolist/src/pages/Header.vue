<template>
    <div id="Header">
        <h1>ToDoList</h1>
        <input type='text' v-model="task" @keyup.13="handleAdd()">
        <!-- <input type='text' v-model="task" @keyup.enter="handleAdd()"> -->
    </div>
</template>

<script>

export default {
    name: 'Header',
    components: {
        
    },
    data:function(){
        return {
            task:'',
        }
    },
    props:{
        addTodos:Function,
    },
    // 添加任务
    methods:{
        handleAdd:function(){
            // 1.检测输入框中的值是否符合
            var task = this.task.trim();
            if(!task){
                window.confirm('请输入值,谢谢!!');
                return;
            }
            // 2.把输入框中的值添加到对象
            var todo = {
                task,
                tag:false,
            }
            // 3.把对象传到目标数组
            this.addTodos(todo);
            // 4.清空输入框中的值
            this.task = '';
        }
    }
}
</script>

<style>
    #Header input{
        width: 100%;
        height: 34px;
        outline-color:#ff6700;
        box-sizing: border-box;
    }
    #Header h1{
        text-align: center;
    }
</style>