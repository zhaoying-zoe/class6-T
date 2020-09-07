<!-- 结构 -->
<template>
    <div id="Search">
        <van-sticky>
            <van-search v-model="value" placeholder="请输入搜索关键词" />
        </van-sticky>
        
    </div>
</template>
<!-- 逻辑 -->
<script>
    export default {
        name:'Search',
        data(){
            return {
                value:''
            }
        },
    }
</script>
<!-- 样式 -->
<style scoped lang="less">

</style>
  