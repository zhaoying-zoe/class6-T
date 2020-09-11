<!-- 结构 -->
<template>
    <div id="SearchInput">
        <van-sticky>
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                @focus="handleSearch()"
            />
        </van-sticky>
        
    </div>
</template>
<!-- 逻辑 -->
<script>
    export default {
        name:'SearchInput',
        data(){
            return {
                value:''
            }
        },
        methods:{
            handleSearch(){
                // 跳转路由到指定页面
                this.$router.push('search')
                // $route.path('/')
                // <router-link :to="{name:'home'}"> 
                // console.log(23);
            }
        }
    }
</script>
<!-- 样式 -->
<style scoped lang="less">

</style>
  