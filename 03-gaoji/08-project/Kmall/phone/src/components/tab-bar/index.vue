<!-- 结构 -->
<template>
    <div id="Tabbar">
        <van-tabbar
            v-model="active"
            active-color="#ff6700"
            inactive-color="#000"
        >
            <van-tabbar-item
                name="home"
                icon="wap-home"
                replace to="/home"
            >Home</van-tabbar-item>
            <van-tabbar-item
                name="search"
                icon="shop"
                replace to="/cart"
            >Cart</van-tabbar-item>
            <van-tabbar-item
                name="friends"
                icon="manager"
                replace to="/me"
            >Me</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<!-- 逻辑 -->
<script>
    export default {
        name:'Tabbar',
        data(){
            return {
                active: 0,
            }
        },
    }
</script>
<!-- 样式 -->
<style scoped lang="less">

</style>
