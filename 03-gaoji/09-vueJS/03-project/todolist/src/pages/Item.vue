<template>
    <div id="Item"
        :style="{backgroundColor:bgColor}"
        @mouseenter="handleShow(true)"
        @mouseleave="handleShow(false)"
    >
        <input type='checkbox' v-model="todo.tag">

        <!-- 把list传来的数据插入标签 -->
        <span>{{todo.task}}</span>
        <button v-if="isShow">删除</button>
    </div>
</template>

<script>
export default {
    name: 'Item',
    components: {

    },
    data:function(){
        return {
            bgColor:'#fff',
            isShow:false,
        }
    },props:{
        // 接收list传来的数据
        todo:Object,
    },
    methods:{
        handleShow:function(flog){
            this.bgColor = flog ? '#ccc' : '#fff';
            this.isShow = flog;
        }
    }
}
</script>

<style>
    #Item{
        width: 100%;
        height: 34px;
        line-height: 34px;
        border: 1px dashed #ccc;
        margin-top: 10px;
        /* background-color: #fff; */
    }
    #Item span{
        margin-left: 5px;
        text-align: center;
    }
    #Item button{
        float: right;
        margin-top: 2px;
        width: 50px;
        height: 30px;
        /* display: none; */
    }
</style>