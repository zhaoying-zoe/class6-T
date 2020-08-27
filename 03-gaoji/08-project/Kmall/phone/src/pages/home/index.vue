<!-- 结构 -->
<template>
    <div id="Home">
        <p>
            this is home page;
        </p>
    </div>
</template>
<!-- 逻辑 -->
<script>
    //1.引入组件
    export default {
        name:'Home',
        data(){
            return {

            }
        },
        //2.注册组件
        components: {

        },
    }
</script>
<!-- 样式 -->
<style scoped lang="less">
    #Home {
        p{
            color: #ff6700;
            .rem(padding,5px)
        }
    }
</style>
