<!-- 结构 -->
<template>
    <div id="Cart">
        <p>
            this is Cart page;
        </p>
    </div>
</template>
<!-- 逻辑 -->
<script>
    //1.引入组件
    export default {
        name:'Cart',
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
    #Cart {
        p{
            color: #ff6700;
            .rem(padding,5px)
        }
    }
</style>
