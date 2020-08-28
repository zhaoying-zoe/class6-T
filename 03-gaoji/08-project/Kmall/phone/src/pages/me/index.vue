<!-- 结构 -->
<template>
    <div id="Me">
        <p>
            this is Me page;
        </p>
    </div>
</template>
<!-- 逻辑 -->
<script>
    //1.引入组件
    export default {
        name:'Me',
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
    #Me {
        p{
            color: #ff6700;
            .rem(padding,5px)
        }
    }
</style>
