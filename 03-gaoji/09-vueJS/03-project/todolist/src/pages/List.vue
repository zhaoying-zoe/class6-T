<template>
    <div id="List">
        <!-- 循环App传来的数据 -->
        <Item
            v-for="(todo,index) in todos"
            :key="index"
            :todo="todo" 
        />
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    name: 'List',
    components: {
        Item,
    },
    props:{
        // 接收App传来的数据
        todos:Array,
    }
}
</script>

<style>

</style>