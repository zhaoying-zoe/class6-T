<template>
    <div id="App">
        <Header
            :addTodos="addTodos" 
        />
        <!-- 把数据传给list -->
        <List
            :todos="todos"
        />
        <Footer />
    </div>
</template>

<script>
import Header from './pages/Header.vue'
import List from './pages/List.vue'
import Footer from './pages/Footer.vue'

export default {
    name: 'App',
    // 注册组件
    components: {
        Header,
        List,
        Footer,
    },
    data:function(){
        return {todos:[
            {
                task:'Study',
                tag:false,
            },
            {
                task:'Eating',
                tag:false,
            },
        ]}
    },
    // 定义方法
    methods:{
        addTodos:function(todo){
            this.todos.unshift(todo);
        }
    }
}
</script>

<style>
    #App{
        width: 600px;
        margin: 100px auto;
    }
</style>
