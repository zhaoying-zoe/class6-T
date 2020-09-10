<!-- 结构 -->
<template>
    <div id="Floor">
        <div v-for="(floor,index) in this.$store.state.floor.floorAds" :key="index">
            <div class="floor-title">{{floor.title}}</div>
            <van-row>
                <van-col span="12" v-for="(product,productIndex) in floor.products" :key="productIndex">
                    <div class="category-item">
                        <div class="category-image">
                            <a href="javascript:;">
                                <img :src="product.mainImage">
                            </a>
                        </div>
                        <div class="category-text">
                            <div class="category-desc">{{product.name}}</div>
                            <span>￥</span><span>{{product.price}}</span>
                            <span @click="shopBtn" class="shopping-cart"><i class="fa fa-shopping-cart"></i></span>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>

    </div>
</template>
<!-- 逻辑 -->
<script>
    import { GET_FLOOR } from './store/types.js'
    export default {
        name:'Floor',
        data(){
            return {
                value:'',
            }
        },
        methods: {
            shopBtn:function(){
                // 
                console.log(2333)
            }
        },
        mounted(){
            // 获取floors数据
            this.$store.dispatch(GET_FLOOR)
        },
    }
</script>
<!-- 样式 -->
<style scoped lang="less">
    .floor-title{
        font-size: 22px;
        color: #000;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 10px;
    }
    .van-row{
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        display:flex;
        flex-flow: wrap;
        /* 项目对齐方式 */
        justify-content:space-between;
        .van-col{
            width: 170px;
            height: 257px;
            background-color: #fff;
            margin-bottom: 10px;
            padding: 5px;
            .category-image img{
                width: 158px;
                height: 158px;
            }
        }
    }
    .category-text{
        margin-top: 12px;
        .category-desc{
            height: 44px;
            // line-height: 47px;
            white-space:pre-line;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #000;
        }
        // 购物车图标样式
        .shopping-cart{
            margin-left: 45px;
        }
        i.fa-shopping-cart{
            color: #ff6700;
            font-size: 30px;
        }
    }
    .category-image{
        a{
            display: inline-block;
            width: 150px;
        }
    } 
</style>
  