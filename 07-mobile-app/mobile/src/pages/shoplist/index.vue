<template>
    <div class="shopList">
        <SearchCommon />
        <div>
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
        </div>
    </div>
</template>

<script>
    // 引入搜索框
    import SearchCommon from '../searchcommon/index';
    export default {
        name: 'shopList',
        props: {
        
        },
        components:{
            SearchCommon
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shopList{
        background-color: #fff;
    }
</style>
  