<!-- 结构 -->
<template>
    <div id="Floor">
        <div class="floor-header">电脑耗材</div>
    </div>
</template>
<!-- 逻辑 -->
<script>
    export default {
        name:'Floor',
        data(){
            return {
                value:''
            }
        },
    }
</script>
<!-- 样式 -->
<style scoped lang="less">
    .floor-header{
        font-size: 22px;
        color: #000;
        text-align: center;
        margin-top: 5px;
    }
</style>
  